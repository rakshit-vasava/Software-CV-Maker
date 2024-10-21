import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import firestore from "./../../firebase/firestore";
import Loader from "./../loader/Loader";
import '../style/cvtitleStyle.css'

const orderOfBlocks = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  }
];

class CreateCV extends Component {
  state = {
    title: "",
    isLoading: true
  };
  componentDidMount() {
    if (!this.props.auth.uid) {
      return <Redirect to="/signin" />;
    }
    this.props.updatePrevUrl(window.location.pathname);
    this.setState({ isLoading: false });
  }
  handleAddCv = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    let cv = this.state,
      userId = this.props.auth.uid;
    if (this.props.location.templateId === 1) {
      firestore
        .collection("users")
        .doc(userId)
        .collection("cvs")
        .add({
          title: cv.title,
          orderOfBlocks: orderOfBlocks,
          orderOfEducationBlocks: [],
          updatedAt: new Date(),
          createdAt: new Date(),
          userId: userId,
          imageUploaded: false,
          templateId: this.props.location.templateId
        })
        .then(resp => {
          console.log("cv added");
          this.setState({ isLoading: false });
          this.props.history.push("/" + resp.id);
        })
        .catch(err => {
          console.log(err);
          this.setState({ isLoading: false });
        });
    } else if (this.props.location.templateId === 2) {
      firestore
        .collection("users")
        .doc(userId)
        .collection("cvs")
        .add({
          title: cv.title,
          updatedAt: new Date(),
          createdAt: new Date(),
          userId: userId,
          imageUploaded: false,
          templateId: this.props.location.templateId
        })
        .then(resp => {
          console.log("cv added");
          this.setState({ isLoading: false });
          this.props.history.push("/" + resp.id);
        })
        .catch(err => {
          console.log(err);
          this.setState({ isLoading: false });
        });
    }
  };
  handleChangeCvTitle = (e, id) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div className="containerTitle">
        <div className="bgtitle"></div>
        <form onSubmit={this.handleAddCv}
              className = "form-conatinerTitle"
        >
          <div className="form-groupTitle">
            <center>  
              <label className = 'title2Title'>
                CV Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={this.handleChangeCvTitle}
              />
            </center>
          </div>
          <div className="form-groupTitle">
            <center>
              <button className="btn btn-primary"
                      type="submit"
                      style={{margin: '10px'}}
              >
                Create
              </button>
            </center>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    prevUrl: state.prevUrlRed.prevUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePrevUrl: prevUrl => {
      dispatch({
        type: "UPDATE_PREVURL",
        prevUrl: prevUrl
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCV);
