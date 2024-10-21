import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Form, Card, Button } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./compoStyle/componentsStyle.css";

class SkillsInfo extends Component {
  handleAddSkillBlock = () => {
    let tid = Date.now();
    let newBlock = { id: tid, skillName: "", skillLevel: "1" };
    this.props.addSkillBlock(newBlock);
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

  handleChangeSkillName = (event, id) => {
    this.props.updateSkillName(event.target.value, id);
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
    let dummyBlock = { id: "dummy" };
    this.props.addSkillBlock(dummyBlock);
    this.props.removeSkillBlock("dummy");
  };

  handleChangeSkillLevel = (event, id) => {
    this.props.updateSkillLevel(event.target.value, id);
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
    let dummyBlock = { id: "dummy" };
    this.props.addSkillBlock(dummyBlock);
    this.props.removeSkillBlock("dummy");
  };

  handleRemoveSkillBlock = id => {
    this.props.removeSkillBlock(id);
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
      .collection("skill")
      .doc(this.props.id)
      .set({
        ...this.props.skillBlocks
      })
      .then(() => console.log("update skill"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    let TskillBlocks = this.props.skillBlocks;
    let n = TskillBlocks.length;
    for (let i = 0; i < n; i++) {
      this.props.removeSkillBlock(TskillBlocks[i].id);
    }
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("skill")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let skill = resp.data();
        if (!skill) return null;
        let sz = Object.keys(skill).length;
        for (let i = 0; i < sz; i++) {
          let newBlock = {
            id: skill[i].id,
            skillName: skill[i].skillName,
            skillLevel: skill[i].skillLevel
          };
          this.props.addSkillBlock(newBlock);
        }
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
          {this.props.skillBlocks.map((value, index) => {
            return (
              <Card key={value.id} style={bgcolor}>
                <Accordion.Toggle as={Card.Header} eventKey={index} style={accordStyle}>
                  Skill #{index + 1}
                  <Button
                    className="float-right remove"
                    size="sm"
                    onClick={() => {
                      this.handleRemoveSkillBlock(value.id);
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
                      <Form.Group controlId="formGroupDegreeName">
                        <Form.Label>Skill Name</Form.Label>
                        <Form.Control className="inputStyle" style={bgcolor}
                          type="text"
                          placeholder="Leadership"
                          onChange={event => {
                            this.handleChangeSkillName(event, value.id);
                          }}
                          defaultValue={this.props.skillBlocks[index].skillName}
                        />
                      </Form.Group>

                      <Form.Group controlId="formGroupSkillLevel">
                        <Form.Label>Skill Level - (Range: 1-5)</Form.Label>

                        <Form.Control className="inputStyle" style={bgcolor}
                          type="range"
                          min="1"
                          max="5"
                          title={value.skillLevel}
                          defaultValue={
                            this.props.skillBlocks[index].skillLevel
                          }
                          step="1"
                          onChange={event => {
                            this.handleChangeSkillLevel(event, value.id);
                          }}
                          custom
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
          onClick={this.handleAddSkillBlock}
        >
          {" "}
          +Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    skillBlocks: state.skillRed_2.skillBlocks_2,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSkillBlock: newBlock => {
      dispatch({ type: "ADD_SKILL_BLOCK_2", newBlock: newBlock });
    },
    updateSkillName: (skillName, id) => {
      dispatch({ type: "UPDATE_SKILL_NAME_2", skillName: skillName, id: id });
    },
    updateSkillLevel: (skillLevel, id) => {
      dispatch({
        type: "UPDATE_SKILL_LEVEL_2",
        skillLevel: skillLevel,
        id: id
      });
    },
    removeSkillBlock: id => {
      dispatch({ type: "REMOVE_SKILL_BLOCK_2", id: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo);
