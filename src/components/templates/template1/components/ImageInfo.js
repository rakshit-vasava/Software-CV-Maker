import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Card, Button } from "react-bootstrap";
import storage from "./../../../../firebase/storage";
import firestore from "./../../../../firebase/firestore";
import firebase from "./../../../../firebase/fbConfig";
import Loader from "./../../../loader/Loader";
import "./CompStyle.css";

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

function download(url, filename) {
  fetch(url).then(function(t) {
    return t.blob().then(b => {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", filename);
      a.click();
    });
  });
}

async function getBase64ImageFromUrl(imageUrl) {
  var res = await fetch(imageUrl);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.addEventListener(
      "load",
      function() {
        resolve(reader.result);
      },
      false
    );

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  });
}

class ImageInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedImage: null,
      isLoading: true,
      isUploading: false
    };
  }
  componentWillUnmount() {
    this.props.removeImage();
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .get()
      .then(resp => {
        if (resp.data().imageUploaded) {
          let downloadRef = storage
            .ref()
            .child("profileImages/" + this.props.id);
          downloadRef
            .getDownloadURL()
            .then(url => {
              getBase64ImageFromUrl(url)
                .then(resp => {
                  this.props.updateImage(resp);
                  this.setState({
                    isLoading: false,
                    savedImage: resp
                  });
                  console.log("download done");
                })
                .catch(err => {
                  console.log(err);
                  this.setState({
                    isLoading: false
                  });
                });
            })
            .catch(error => {
              switch (error.code) {
                case "storage/object-not-found":
                  console.log("File doesn't exist");
                  break;

                case "storage/unauthorized":
                  console.log(
                    "User doesn't have permission to access the object"
                  );
                  break;

                case "storage/canceled":
                  console.log("User canceled the upload");
                  break;

                case "storage/unknown":
                  // Unknown error occurred, inspect the server response
                  break;
              }
              this.setState({
                isLoading: false
              });
            });
        } else {
          this.setState({ isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }

  handleSavedImage = event => {
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        savedImage: e.target.result
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  handleUploadImage = event => {
    this.props.updateImage(this.state.savedImage);
    this.setState({ isLoading: true });
    let image = this.state.savedImage;
    let imageFile = dataURLtoFile(image, "profileImage.jpg");
    let metadata = {
      contentType: imageFile.type
    };
    let uploadRef = storage
      .ref()
      .child("profileImages/" + this.props.id)
      .put(imageFile, metadata);
    uploadRef.on(
      "state_changed",
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = Math.floor(progress);
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused": // or 'paused'
            console.log("Upload is paused");
            break;
          case "running": // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      error => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
        this.setState({
          isUploading: false
        });
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadRef.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
          this.setState({ isLoading: false });
          firestore
            .collection("users")
            .doc(this.props.auth.uid)
            .collection("cvs")
            .doc(this.props.id)
            .update({
              imageUploaded: true
            })
            .then(() => console.log("imageUploaded"))
            .catch(err => {
              console.log(err);
            });
        });
      }
    );

    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time"))
      .catch(err => {
        console.log(err);
      });
  };

  handleRemoveImage = () => {
    this.props.removeImage();
    this.setState({ isLoading: true });
    let deleteRef = storage
      .ref()
      .child("profileImages/" + this.props.id)
      .delete();
    deleteRef
      .then(() => {
        console.log("removed successfully");
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .update({
        updatedAt: new Date(),
        imageUploaded: false
      })
      .then(() => console.log("update date and time"))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const card = {
      backgroundColor:"#202020",
      margin: "10px 0px",
      color:"white"
    }
    
    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (this.props.img === null) {
      return (
        <div>
          <Card body className="inputStyle" style={card}>
            <Form.Group
              controlId="formGroupImg"
              style={{ display: "inline-block", float: "left" }}
            >
              <input type="file" onChange={this.handleSavedImage} />
            </Form.Group>
            <Button className="add" 
            onClick={this.handleUploadImage}
            >
              {" "}
              + Upload{" "}
            </Button>
          </Card>
        </div>
      );
    } else if (this.props.img) {
      return (
        <Button className="remove" 
        onClick={this.handleRemoveImage}
        style={{border:"none"}}>
          {" "}
          - Remove Image{" "}
        </Button>
      );
    }
    /*return this.state.isLoading ? (
      <Loader />
    ) : (
      <div>
        <Card body border="primary" style={{ margin: "10px 0px" }}>
          <Form.Group
            controlId="formGroupImg"
            style={{ display: "inline-block", float: "left" }}
          >
            <input type="file" onChange={this.handleSavedImage} />
          </Form.Group>
          <Button variant="primary" onClick={this.handleUploadImage}>
            {" "}
            + Upload{" "}
          </Button>
        </Card>
        <Button variant="danger" onClick={this.handleRemoveImage}>
          {" "}
          - Remove Image{" "}
        </Button>
      </div>
    );*/
  }
}

const mapStateToProps = state => {
  return {
    img: state.imageRed_1.img_1,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateImage: img => {
      dispatch({ type: "UPLOAD_IMAGE_1", img: img });
    },
    removeImage: () => {
      dispatch({ type: "REMOVE_IMAGE_1" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageInfo);
