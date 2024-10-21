import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import Loader from "./../../../loader/Loader";
import EducationInfoComp from "./EducationInfoComp";
import "./CompStyle.css";

class EducationInfo extends Component {
  state = { isLoading: false };
  handleAddDegreeBlock = e => {
    let id = Date.now();
    let newBlock = {
      id: id,
      degreeName: "",
      instituteName: "",
      year: "",
      score: ""
    };
    this.props.addDegreeBlock(newBlock, this.props.auth.uid, this.props.id);
    this.props.addOrderOfEducationBlock(
      {
        id: id
      },
      this.props.auth.uid,
      this.props.id
    );
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.removeAllBlocks();
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("education")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let education = resp.data();
        if (!education) {
          this.setState({ isLoading: false });
          return null;
        }
        let sz = Object.keys(education).length;
        let blocks = [];
        for (let i = 0; i < sz; i++) {
          blocks.push(education[i]);
        }
        this.props.loadAllBlocks(blocks);
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }
  /*handleChangeDegreeName = (event, id) => {
    this.props.updateDegreeName(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      degreeName: "",
      instituteName: "",
      year: "",
      score: ""
    };
    this.props.addDegreeBlock(dummyBlock);
    this.props.removeBlock("dummy");
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

  handleChangeInstituteName = (event, id) => {
    this.props.updateInstituteName(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      degreeName: "",
      instituteName: "",
      year: "",
      score: ""
    };
    this.props.addDegreeBlock(dummyBlock);
    this.props.removeBlock("dummy");
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

  handleChangeYear = (event, id) => {
    this.props.updateYear(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      degreeName: "",
      instituteName: "",
      year: "",
      score: ""
    };
    this.props.addDegreeBlock(dummyBlock);
    this.props.removeBlock("dummy");
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

  handleChangeScore = (event, id) => {
    this.props.updateScore(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      degreeName: "",
      instituteName: "",
      year: "",
      score: ""
    };
    this.props.addDegreeBlock(dummyBlock);
    this.props.removeBlock("dummy");
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

  handleRemoveBlock = id => {
    this.props.removeBlock(id);
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
  };*/
  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div>
        <EducationInfoComp cvid={this.props.id} />
        {/*<Accordion defaultActiveKey=" ">
          {this.props.degreeBlocks.map((value, index) => {
            return (
              <Card key={value.id}>
                <Accordion.Toggle as={Card.Header} eventKey={index}>
                  Degree #{index + 1}
                  <Button
                    className="float-right"
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      this.handleRemoveBlock(value.id);
                    }}
                  >
                    -Remove
                  </Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="degreeName">
                        <Form.Label>Degree Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="B.Tech"
                          onChange={event => {
                            this.handleChangeDegreeName(event, value.id);
                          }}
                          defaultValue={
                            this.props.degreeBlocks[index].degreeName
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupInstituteName">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Institute name"
                          onChange={event => {
                            this.handleChangeInstituteName(event, value.id);
                          }}
                          defaultValue={
                            this.props.degreeBlocks[index].instituteName
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="2017-2021"
                          onChange={event => {
                            this.handleChangeYear(event, value.id);
                          }}
                          defaultValue={this.props.degreeBlocks[index].year}
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupScore">
                        <Form.Label>CPI/AGGREGATE</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="grade"
                          onChange={event => {
                            this.handleChangeScore(event, value.id);
                          }}
                          defaultValue={this.props.degreeBlocks[index].score}
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>*/}
        <Button
          className="add"
          onClick={this.handleAddDegreeBlock}
          style={{ marginTop: "10px" }}
        >
          +Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    degreeBlocks: state.educationRed_1.degreeBlocks_1,
    orderOfEducationBlocks:
      state.orderOfEducationBlocksRed.orderOfEducationBlocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDegreeBlock: (newBlock, uid, cvid) => {
      dispatch({
        type: "ADD_EDUCATION_BLOCK_1",
        newBlock: newBlock,
        uid: uid,
        cvid: cvid
      });
    },
    updateOrderOfEducationBlocks: (orderOfEducationBlocks, uid, cvid) => {
      dispatch({
        type: "UPDATE_ORDER_OF_EDUCATION_BLOCKS",
        orderOfEducationBlocks: orderOfEducationBlocks,
        uid: uid,
        cvid: cvid
      });
    },
    addOrderOfEducationBlock: (newBlock, uid, cvid) => {
      dispatch({
        type: "ADD_ORDER_OF_EDUCATION_BLOCK",
        newBlock: newBlock,
        uid: uid,
        cvid: cvid
      });
    },
    removeBlock: (id, uid, cvid) => {
      dispatch({
        type: "REMOVE_EDUCATION_BLOCK_1",
        id: id,
        uid: uid,
        cvid: cvid
      });
    },
    removeAllBlocks: () => {
      dispatch({
        type: "REMOVE_ALL_EDUCATION_BLOCKS_1"
      });
    },
    loadAllBlocks: blocks => {
      dispatch({
        type: "LOAD_ALL_EDUCATION_BLOCKS_1",
        blocks: blocks
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationInfo);
