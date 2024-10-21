import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Accordion, Card, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from "./../../../loader/Loader";
import "./CompStyle.css";

const EducationBlock = ({
  id,
  auth,
  index,
  moveBlock,
  findBlock,
  eventKey,
  degreeBlocks,
  updateDegreeName,
  updateInstituteName,
  updateOrderOfEducationBlocks,
  updateScore,
  updateYear,
  removeBlock,
  addDegreeBlock,
  removeOrderOfEducationBlock,
  cvid,
  addDummyBlock,
  removeDummyBlock
}) => {
  const [state, setState] = useState({ ok: false });
  /*useEffect(() => {
    if (degreeBlocks !== undefined) setState({ isLoading: false });
  }, [degreeBlocks]);*/
  const originalIndex = findBlock(id).index;
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "block", id, originalIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveBlock(droppedId, originalIndex);
      }
    }
  });
  const [, drop] = useDrop({
    accept: "block",
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findBlock(id);
        moveBlock(draggedId, overIndex);
      }
    }
  });
  const opacity = isDragging ? 0 : 1;
  const handleChangeDegreeName = (event, bid) => {
    updateDegreeName(event.target.value, bid, auth.uid, cvid);
    let dummyBlock = {id: 'dummy'};
    addDummyBlock(dummyBlock);
    removeDummyBlock('dummy');
  };
  const handleChangeInstituteName = (event, bid) => {
    updateInstituteName(event.target.value, bid, auth.uid, cvid);
    let dummyBlock = {id: 'dummy'};
    addDummyBlock(dummyBlock);
    removeDummyBlock('dummy');
  };
  const handleChangeYear = (event, id) => {
    updateYear(event.target.value, id, auth.uid, cvid);
    let dummyBlock = {id: 'dummy'};
    addDummyBlock(dummyBlock);
    removeDummyBlock('dummy');
  };
  const handleChangeScore = (event, bid) => {
    updateScore(event.target.value, bid, auth.uid, cvid);
    let dummyBlock = {id: 'dummy'};
    addDummyBlock(dummyBlock);
    removeDummyBlock('dummy');
  };
  const handleRemoveBlock = bid => {
    removeBlock(bid, auth.uid, cvid);
    removeOrderOfEducationBlock(id, auth.uid, cvid);
  };
  const accordStyle = {
    boxShadow: "inset 0 -1px 2px #303030"
   }
   const bgcolor = {
    backgroundColor:"#202020",
    margin: "10px 0px",
    color:"white",
    border: "none"
  }
  return (
    <React.Fragment>
      {degreeBlocks
        .filter(e => e.id === id)
        .map(value => {
          return (
            <Card key={id} ref={preview} style={bgcolor}>
              <Accordion.Toggle as={Card.Header} eventKey={eventKey} style={accordStyle}>
                Degree #{index}
                <Button
                  className="float-right"
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    handleRemoveBlock(value.id);
                  }}
                >
                  -Remove
                </Button>
                <p
                  ref={node => drag(drop(node))}
                  className="float-left"
                  style={{
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    margin: "0px",
                    cursor: "move"
                  }}
                >
                  ::
                </p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="degreeName">
                      <Form.Label>Degree Name</Form.Label>
                      <Form.Control className="inputStyle" style={bgcolor}
                        type="text"
                        placeholder="B.Tech"
                        onChange={event => {
                          handleChangeDegreeName(event, value.id);
                        }}
                        defaultValue={value.degreeName}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupInstituteName">
                      <Form.Label>College Name</Form.Label>
                      <Form.Control className="inputStyle" style={bgcolor}
                        type="text"
                        placeholder="Institute name"
                        onChange={event => {
                          handleChangeInstituteName(event, value.id);
                        }}
                        defaultValue={value.instituteName}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupYear">
                      <Form.Label>Year</Form.Label>
                      <Form.Control className="inputStyle" style={bgcolor}
                        type="text"
                        placeholder="2017-2021"
                        onChange={event => {
                          handleChangeYear(event, value.id);
                        }}
                        defaultValue={value.year}
                      />
                    </Form.Group>

                    <Form.Group controlId="formGroupScore">
                      <Form.Label>CPI/AGGREGATE</Form.Label>
                      <Form.Control className="inputStyle" style={bgcolor}
                        type="text"
                        placeholder="grade"
                        onChange={event => {
                          handleChangeScore(event, value.id);
                        }}
                        defaultValue={value.score}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    prevUrl: state.prevUrlRed.prevUrl,
    orderOfEducationBlocks:
      state.orderOfEducationBlocksRed.orderOfEducationBlocks,
    degreeBlocks: state.educationRed_1.degreeBlocks_1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDummyBlock: (dummyBlock) => {
      dispatch({
        type: "ADD_DUMMY_BLOCK_1",
        dummyBlock: dummyBlock
      });
    },
    removeDummyBlock: (id) => {
      dispatch({
        type: "REMOVE_DUMMY_BLOCK_1",
        id: id
      });
    },
    addDegreeBlock: (newBlock, uid, cvid) => {
      dispatch({
        type: "ADD_EDUCATION_BLOCK_1",
        newBlock: newBlock,
        uid: uid,
        cvid: cvid
      });
    },
    updatePrevUrl: prevUrl => {
      dispatch({
        type: "UPDATE_PREVURL",
        prevUrl: prevUrl
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
    updateDegreeName: (degreeName, id, uid, cvid) => {
      dispatch({
        type: "UPDATE_EDUCATION_DEGREE_NAME_1",
        degreeName: degreeName,
        id: id,
        uid: uid,
        cvid: cvid
      });
    },
    updateInstituteName: (instituteName, id, uid, cvid) => {
      dispatch({
        type: "UPDATE_EDUCATION_INSTITUTE_NAME_1",
        instituteName: instituteName,
        id: id,
        uid: uid,
        cvid: cvid
      });
    },
    updateYear: (year, id, uid, cvid) => {
      dispatch({
        type: "UPDATE_EDUCATION_YEAR_1",
        year: year,
        id: id,
        uid: uid,
        cvid: cvid
      });
    },
    updateScore: (score, id, uid, cvid) => {
      dispatch({
        type: "UPDATE_EDUCATION_SCORE_1",
        score: score,
        id: id,
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
    removeOrderOfEducationBlock: (id, uid, cvid) => {
      dispatch({
        type: "REMOVE_ORDER_OF_EDUCATION_BLOCK",
        id: id,
        uid: uid,
        cvid: cvid
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationBlock);
