import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Card, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./CompStyle.css";

class AwardInfo extends Component {
  handleAddAwardBlock = () => {
    let tid = Date.now();
    let newBlock = { id: tid, information: "" };
    this.props.addAwardBlock(newBlock);
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .update({
        updatedAt: new Date()
      })
      .then(console.log("update date and time"))
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
      .collection("award")
      .doc(this.props.id)
      .set({
        ...this.props.awardBlocks
      })
      .then(() => console.log("update award"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    let TawardBlocks = this.props.awardBlocks;
    let n = TawardBlocks.length;
    for (let i = 0; i < n; i++) {
      this.props.removeAwardBlock(TawardBlocks[i].id);
    }
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("award")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let award = resp.data();
        if (!award) return null;
        let sz = Object.keys(award).length;
        for (let i = 0; i < sz; i++) {
          let newBlock = {
            id: award[i].id,
            information: award[i].information
          };
          this.props.addAwardBlock(newBlock);
        }
      })
      .catch(err => console.log(err));
  }
  handleChangeAward = (event, id) => {
    this.props.updateAward(event.target.value, id);
    let dummyBlock = { id: "dummy", information: "" };
    this.props.addAwardBlock(dummyBlock);
    this.props.removeAwardBlock("dummy");
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

  handleRemoveAwardBlock = id => {
    this.props.removeAwardBlock(id);
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
        {this.props.awardBlocks.map((value, index) => {
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
                      this.handleChangeAward(event, value.id);
                    }}
                    defaultValue={this.props.awardBlocks[index].information}
                  />
                </Form.Group>
              </Form>
              <Button
                className="remove"
                onClick={() => {
                  this.handleRemoveAwardBlock(value.id);
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
         onClick={this.handleAddAwardBlock}>
          {" "}
          +Add{" "}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    awardBlocks: state.awardRed_1.awardBlocks_1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAwardBlock: newBlock => {
      dispatch({ type: "ADD_AWARD_BLOCK_1", newBlock: newBlock });
    },
    updateAward: (information, id) => {
      dispatch({
        type: "UPDATE_AWARD_INFORMATION_1",
        information: information,
        id: id
      });
    },
    removeAwardBlock: id => {
      dispatch({ type: "REMOVE_AWARD_BLOCK_1", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardInfo);
