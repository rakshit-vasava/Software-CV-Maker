import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Card, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./CompStyle.css";

class PositionInfo extends Component {
  handleAddPositionBlock = () => {
    let tid = Date.now();
    let newBlock = { id: tid, information: "" };
    this.props.addPositionBlock(newBlock);
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
      .collection("position")
      .doc(this.props.id)
      .set({
        ...this.props.positionBlocks
      })
      .then(() => console.log("update position"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    let TpositionBlocks = this.props.positionBlocks;
    let n = TpositionBlocks.length;
    for (let i = 0; i < n; i++) {
      this.props.removePositionBlock(TpositionBlocks[i].id);
    }
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("position")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let position = resp.data();
        if (!position) return null;
        let sz = Object.keys(position).length;
        for (let i = 0; i < sz; i++) {
          let newBlock = {
            id: position[i].id,
            information: position[i].information
          };
          this.props.addPositionBlock(newBlock);
        }
      });
  }

  handleChangePosition = (event, id) => {
    this.props.updatePosition(event.target.value, id);
    let dummyBlock = { id: "dummy", information: "" };
    this.props.addPositionBlock(dummyBlock);
    this.props.removePositionBlock("dummy");
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

  handleRemovePositionBlock = id => {
    this.props.removePositionBlock(id);
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
      backgroundColor: "#202020",
      color: "white",
      border:"none",
    }
    const cardStyle = {
      boxShadow: "inset 0 0px 4px #303030",
      backgroundColor: "#202020",
      color: "white",
      margin: "10px" 
    }

    return (
      <div>
        {this.props.positionBlocks.map((value, index) => {
          return (
            <Card body style={cardStyle} key={index}>
              <Form>
                <Form.Group controlId="formGroupPos">
                  {" "}
                  {/*Area of Interest*/}
                  <Form.Control className="inputStyle" style={bgcolor}
                    type="text"
                    placeholder="Member of X committee from January 2020 to May 2020..."
                    onChange={event => {
                      this.handleChangePosition(event, value.id);
                    }}
                    defaultValue={this.props.positionBlocks[index].information}
                  />
                </Form.Group>
              </Form>
              <Button
                className="remove"
                onClick={() => {
                  this.handleRemovePositionBlock(value.id);
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
        onClick={this.handleAddPositionBlock}
        >
          {" "}
          +Add{" "}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    positionBlocks: state.positionRed_1.positionBlocks_1,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPositionBlock: newBlock => {
      dispatch({ type: "ADD_POSITION_BLOCK_1", newBlock: newBlock });
    },
    updatePosition: (information, id) => {
      dispatch({
        type: "UPDATE_POSITION_INFORMATION_1",
        information: information,
        id: id
      });
    },
    removePositionBlock: id => {
      dispatch({ type: "REMOVE_POSITION_BLOCK_1", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionInfo);
