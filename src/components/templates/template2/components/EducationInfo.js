import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./compoStyle/componentsStyle.css";

class EducationInfo extends Component {
  handleAddDegreeBlock = e => {
    let id = Date.now();
    let newBlock = {
      id: id,
      degreeName: "",
      instituteName: "",
      year: ""
    };
    this.props.addDegreeBlock(newBlock);
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
      .collection("education")
      .doc(this.props.id)
      .set({
        ...this.props.degreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    let TdegreeBlocks = this.props.degreeBlocks;
    let n = TdegreeBlocks.length;
    for (let i = 0; i < n; i++) {
      this.props.removeBlock(TdegreeBlocks[i].id);
    }
  }
  componentDidMount() {
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
        if (!education) return null;
        let sz = Object.keys(education).length;
        for (let i = 0; i < sz; i++) {
          let newBlock = {
            id: education[i].id,
            degreeName: education[i].degreeName,
            instituteName: education[i].instituteName,
            year: education[i].year
          };
          this.props.addDegreeBlock(newBlock);
        }
      });
  }

  handleChangeYear = (event, id) => {
    this.props.updateYear(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      degreeName: "",
      instituteName: "",
      year: ""
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

  handleChangeDegreeName = (event, id) => {
    this.props.updateDegreeName(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      degreeName: "",
      instituteName: "",
      year: ""
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
      year: ""
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
  };

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
          {this.props.degreeBlocks.map((value, index) => {
            return (
              <Card key={value.id} style={bgcolor}>
                <Accordion.Toggle as={Card.Header} eventKey={index} style={accordStyle}>
                  Degree #{index + 1}
                  <Button
                    className="float-right remove"
                    size="sm"
                
                    onClick={() => {
                      this.handleRemoveBlock(value.id);
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
                    <Form>
                      <Form.Group controlId="formGroupYear">
                        <Form.Label>Year</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="2017-2021"
                          onChange={event => {
                            this.handleChangeYear(event, value.id);
                          }}
                          defaultValue={this.props.degreeBlocks[index].year}
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupDegreeName">
                        <Form.Label>Degree and College Name</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text" 
                          placeholder="BTech in Computer Science"
                          onChange={event => {
                            this.handleChangeDegreeName(event, value.id);
                          }}
                          defaultValue={
                            this.props.degreeBlocks[index].degreeName
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupInstituteName">
                        <Form.Label>Degree and College Name</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="DA-IICT"
                          onChange={event => {
                            this.handleChangeInstituteName(event, value.id);
                          }}
                          defaultValue={
                            this.props.degreeBlocks[index].instituteName
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
          onClick={this.handleAddDegreeBlock}
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
    degreeBlocks: state.educationRed_2.degreeBlocks_2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDegreeBlock: newBlock => {
      dispatch({ type: "ADD_EDUCATION_BLOCK_2", newBlock: newBlock });
    },
    updateYear: (year, id) => {
      dispatch({ type: "UPDATE_EDUCATION_YEAR_2", year: year, id: id });
    },
    updateDegreeName: (degreeName, id) => {
      dispatch({
        type: "UPDATE_EDUCATION_DEGREE_NAME_2",
        degreeName: degreeName,
        id: id
      });
    },
    updateInstituteName: (instituteName, id) => {
      dispatch({
        type: "UPDATE_EDUCATION_INSTITUTE_NAME_2",
        instituteName: instituteName,
        id: id
      });
    },
    removeBlock: id => {
      dispatch({ type: "REMOVE_EDUCATION_BLOCK_2", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationInfo);
