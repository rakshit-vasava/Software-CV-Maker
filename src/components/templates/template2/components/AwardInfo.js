import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Form, Card, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./compoStyle/componentsStyle.css";

class AwardInfo extends Component {
  handleAddAwardBlock = () => {
    let tid = Date.now();
    let newBlock = { id: tid, year: "", information: "" };
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

  handleChangeYear = (event, id) => {
    this.props.updateYear(event.target.value, id);

    let dummyBlock = { id: "dummy" };
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
            information: award[i].information,
            year: award[i].year
          };
          this.props.addAwardBlock(newBlock);
        }
      })
      .catch(err => console.log(err));
  }
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

  render() {
    const bgcolor = {
      backgroundColor:"#202020",
      margin: "10px 0px",
      color:"white",
      border: "none"
    }
    const accordStyle = {
     boxShadow: "inset 0 -1px 2px #303030"
    }
    return (
      <div>
        <Accordion defaultActiveKey=" ">
          {this.props.awardBlocks.map((value, index) => {
            return (
              <Card key={value.id} style={bgcolor}>
                <Accordion.Toggle as={Card.Header} eventKey={index} style={accordStyle}>
                  Award/Honour #{index + 1}
                  <Button
                    className="float-right remove"
                    size="sm"
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
                    -Remove
                  </Button>
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <Form >
                      <Form.Group controlId="formGroupYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control className="inputSyle" style={bgcolor}
                          type="text"
                          placeholder="2017-01"
                          onChange={event => {
                            this.handleChangeYear(event, value.id);
                          }}
                          defaultValue={this.props.awardBlocks[index].year}
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupAwardName">
                        <Form.Label>Award Information</Form.Label>
                        <Form.Control className="inputSyle" style={bgcolor}
                          type="text"
                          placeholder=""
                          onChange={event => {
                            this.handleChangeAward(event, value.id);
                          }}
                          defaultValue={
                            this.props.awardBlocks[index].information
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>

        <Button
          className="add"
          style={{ margin: "5px" }}
          onClick={this.handleAddAwardBlock}
        >
          {" "}
          +Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    awardBlocks: state.awardRed_2.awardBlocks_2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAwardBlock: newBlock => {
      dispatch({ type: "ADD_AWARD_BLOCK_2", newBlock: newBlock });
    },
    updateYear: (year, id) => {
      dispatch({ type: "UPDATE_AWARD_YEAR_2", year: year, id: id });
    },
    updateAward: (information, id) => {
      dispatch({
        type: "UPDATE_AWARD_INFORMATION_2",
        information: information,
        id: id
      });
    },
    removeAwardBlock: id => {
      dispatch({ type: "REMOVE_AWARD_BLOCK_2", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardInfo);
