import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./CompStyle.css";

class InternshipInfo extends Component {
  handleAddInternshipBlock = event => {
    let tid = Date.now();
    let newBlock = {
      id: tid,
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(newBlock);
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
      .collection("internship")
      .doc(this.props.id)
      .set({
        ...this.props.internshipBlocks
      })
      .then(() => console.log("update internship"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    let TinternshipBlocks = this.props.internshipBlocks;
    let n = TinternshipBlocks.length;
    for (let i = 0; i < n; i++) {
      this.props.removeInternshipBlock(TinternshipBlocks[i].id);
    }
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("internship")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let internship = resp.data();
        if (!internship) return null;
        let sz = Object.keys(internship).length;
        for (let i = 0; i < sz; i++) {
          let newBlock = {
            id: internship[i].id,
            organizationName: internship[i].organizationName,
            description: internship[i].description,
            supervisor: internship[i].supervisor,
            start: internship[i].start,
            end: internship[i].end,
            teamSize: internship[i].teamSize
          };
          this.props.addInternshipBlock(newBlock);
        }
      });
  }
  handleChangeOrganizationName = (event, id) => {
    this.props.updateOrganiztionName(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(dummyBlock);
    this.props.removeInternshipBlock("dummy");
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

  handleChangeDescription = (event, id) => {
    this.props.updateDescription(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(dummyBlock);
    this.props.removeInternshipBlock("dummy");
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

  handleChangeSupervisor = (event, id) => {
    this.props.updateSupervisor(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(dummyBlock);
    this.props.removeInternshipBlock("dummy");
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

  handleChangeStart = (event, id) => {
    this.props.updateStart(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(dummyBlock);
    this.props.removeInternshipBlock("dummy");
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

  handleChangeEnd = (event, id) => {
    this.props.updateEnd(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(dummyBlock);
    this.props.removeInternshipBlock("dummy");
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

  handleChangeTeamSize = (event, id) => {
    this.props.updateTeamSize(event.target.value, id);
    let dummyBlock = {
      id: "dummy",
      organizationName: "",
      description: "",
      supervisor: "",
      start: "",
      end: "",
      teamSize: ""
    };
    this.props.addInternshipBlock(dummyBlock);
    this.props.removeInternshipBlock("dummy");
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

  handleRemoveInternshipBlock = id => {
    this.props.removeInternshipBlock(id);
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
          {this.props.internshipBlocks.map((value, index) => {
            return (
              <Card key={value.id} style={bgcolor}>
                <Accordion.Toggle as={Card.Header} eventKey={index} style={accordStyle}>
                  Internship #{index + 1}
                  <Button
                    className="float-right remove"
                    size="sm"
                    style={{border:"none"}}
                    onClick={() => {
                      this.handleRemoveInternshipBlock(value.id);
                    }}
                  >
                    -Remove
                  </Button>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <Form style={bgcolor}>
                      <Form.Group controlId="formGroupOrganizationName">
                        <Form.Label>Organization/Institute Name</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="Microsoft/DA-IICT"
                          onChange={event => {
                            this.handleChangeOrganizationName(event, value.id);
                          }}
                          defaultValue={
                            this.props.internshipBlocks[index].organizationName
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          as="textarea"
                          row="2"
                          placeholder="Description about internship..."
                          onChange={event => {
                            this.handleChangeDescription(event, value.id);
                          }}
                          defaultValue={
                            this.props.internshipBlocks[index].description
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupScore">
                        <Form.Label>Guide/Supervisor</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="Prof./Mr./Mrs./Ms. X"
                          onChange={event => {
                            this.handleChangeSupervisor(event, value.id);
                          }}
                          defaultValue={
                            this.props.internshipBlocks[index].supervisor
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupScore">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="February, 2020"
                          onChange={event => {
                            this.handleChangeStart(event, value.id);
                          }}
                          defaultValue={
                            this.props.internshipBlocks[index].start
                          }
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupScore">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="April, 2020"
                          onChange={event => {
                            this.handleChangeEnd(event, value.id);
                          }}
                          defaultValue={this.props.internshipBlocks[index].end}
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupScore">
                        <Form.Label>Team Size</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="#4"
                          onChange={event => {
                            this.handleChangeTeamSize(event, value.id);
                          }}
                          defaultValue={
                            this.props.internshipBlocks[index].teamSize
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
          onClick={this.handleAddInternshipBlock}
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
    internshipBlocks: state.internshipRed_1.internshipBlocks_1,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addInternshipBlock: newBlock => {
      dispatch({ type: "ADD_INTERNSHIP_BLOCK_1", newBlock: newBlock });
    },
    updateOrganiztionName: (organizationName, id) => {
      dispatch({
        type: "UPDATE_INTERNSHIP_ORGANIZATION_NAME_1",
        organizationName: organizationName,
        id: id
      });
    },
    updateDescription: (description, id) => {
      dispatch({
        type: "UPDATE_INTERNSHIP_DESCRIPTION_1",
        description: description,
        id: id
      });
    },
    updateSupervisor: (supervisor, id) => {
      dispatch({
        type: "UPDATE_INTERNSHIP_SUPERVISOR_1",
        supervisor: supervisor,
        id: id
      });
    },
    updateStart: (start, id) => {
      dispatch({ type: "UPDATE_INTERNSHIP_START_1", start: start, id: id });
    },
    updateEnd: (end, id) => {
      dispatch({ type: "UPDATE_INTERNSHIP_END_1", end: end, id: id });
    },
    updateTeamSize: (teamSize, id) => {
      dispatch({
        type: "UPDATE_INTERNSHIP_TEAM_SIZE_1",
        teamSize: teamSize,
        id: id
      });
    },
    removeInternshipBlock: id => {
      dispatch({ type: "REMOVE_INTERNSHIP_BLOCK_1", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InternshipInfo);
