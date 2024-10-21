import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Card, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./compoStyle/componentsStyle.css";

class HobbyInfo extends Component {
  handleAddHobbyBlock = () => {
    let tid = Date.now();
    let newBlock = { id: tid, information: "" };
    this.props.addHobbyBlock(newBlock);
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
  componentDidUpdate() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("hobby")
      .doc(this.props.id)
      .set({
        ...this.props.hobbyBlocks
      })
      .then(() => console.log("update hobby"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    let ThobbyBlocks = this.props.hobbyBlocks;
    let n = ThobbyBlocks.length;
    for (let i = 0; i < n; i++) {
      this.props.removeHobbyBlock(ThobbyBlocks[i].id);
    }
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("hobby")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let hobby = resp.data();
        if (!hobby) return null;
        let sz = Object.keys(hobby).length;
        for (let i = 0; i < sz; i++) {
          let newBlock = {
            id: hobby[i].id,
            information: hobby[i].information
          };
          this.props.addHobbyBlock(newBlock);
        }
      });
  }
  handleChangeHobby = (event, id) => {
    this.props.updateHobby(event.target.value, id);
    let dummyBlock = { id: "dummy", information: "" };
    this.props.addHobbyBlock(dummyBlock);
    this.props.removeHobbyBlock("dummy");
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

  handleRemoveHobbyBlock = id => {
    this.props.removeHobbyBlock(id);
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
  render() {
    const bgcolor = {
      backgroundColor:"#202020",
      margin: "10px 0px",
      color:"white",
      border: "none",
      boxShadow: "inset 0 -1px 2px #303030"
    }
    const accordStyle = {
     
    }
    return (
      <div>
        {this.props.hobbyBlocks.map((value, index) => {
          return (
            <Card body style={bgcolor} key={index}>
              <Form>
                <Form.Group controlId="formGroupPos">
                  {" "}
                  {/*Area of Interest*/}
                  <Form.Control className="inputStyle" style={bgcolor} 
                    type="text"
                    placeholder="Member of X committee from January 2020 to May 2020..."
                    onChange={event => {
                      this.handleChangeHobby(event, value.id);
                    }}
                  />
                </Form.Group>
              </Form>
              <Button
                className="remove"
                onClick={() => {
                  this.handleRemoveHobbyBlock(value.id);
                }}
                style={{
                  display: "inline-block",
                  float: "left",
                  margin: "5px",
                  border:"none"
                }}
              >
                {" "}
                -Remove{" "}
              </Button>
            </Card>
          );
        })}
        <Button className="add" 
        onClick={this.handleAddHobbyBlock}>
          {" "}
          +Add{" "}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hobbyBlocks: state.hobbyRed_2.hobbyBlocks_2,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addHobbyBlock: newBlock => {
      dispatch({ type: "ADD_HOBBY_BLOCK_2", newBlock: newBlock });
    },
    updateHobby: (information, id) => {
      dispatch({
        type: "UPDATE_HOBBY_INFORMATION_2",
        information: information,
        id: id
      });
    },
    removeHobbyBlock: id => {
      dispatch({ type: "REMOVE_HOBBY_BLOCK_2", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HobbyInfo);
