import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Card } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./CompStyle.css";

class SkillsInfo extends Component {
  componentDidUpdate() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("skill")
      .doc(this.props.id)
      .set({
        areaOfInterest: this.props.aoi,
        proLanguages: this.props.pl,
        toolsAndTech: this.props.tt,
        techElectives: this.props.te
      })
      .then(() => console.log("update skill"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    this.props.updateAOI("");
    this.props.updatePL("");
    this.props.updateTT("");
    this.props.updateTE("");
  }
  componentDidMount() {
    firestore
      .collection("skill")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let skill = resp.data();
        if (!skill) return null;
        this.props.updateAOI(skill.areaOfInterest);
        this.props.updatePL(skill.proLanguages);
        this.props.updateTT(skill.toolsAndTech);
        this.props.updateTE(skill.techElectives);
      });
  }
  handleChangeAOI = event => {
    this.props.updateAOI(event.target.value);
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

  handleChangePL = event => {
    this.props.updatePL(event.target.value);
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

  handleChangeTT = event => {
    this.props.updateTT(event.target.value);
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

  handleChangeTE = event => {
    this.props.updateTE(event.target.value);
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

    return (
      <div>
        <Form >
          <Card body  style={bgcolor} >
            <Form.Group controlId="formGroupAOI">
              {/*Area of Interest*/}
              <Form.Label>Expertise Area/Area(s) of Interest</Form.Label>
              <Form.Control className="inputStyle" style={bgcolor}
                as="textarea"
                rows="3"
                placeholder="Web Development, Machine Learning..."
                onChange={this.handleChangeAOI}
                defaultValue={this.props.aoi}
              />
            </Form.Group>
          </Card>

          <Card body style={bgcolor}>
            <Form.Group controlId="formGroupPL">
              {" "}
              {/* Programming Languages */}
              <Form.Label>Programming Language(s)</Form.Label>
              <Form.Control className="inputStyle" style={bgcolor}
                as="textarea"
                rows="3"
                placeholder="C++, Python..."
                onChange={this.handleChangePL}
                defaultValue={this.props.pl}
              />
            </Form.Group>
          </Card>

          <Card body style={bgcolor}>
            <Form.Group controlId="formGroupTT">
              {" "}
              {/* Tools and Technologies */}
              <Form.Label>Tools and Technologies</Form.Label>
              <Form.Control className="inputStyle" style={bgcolor}
                as="textarea"
                rows="3"
                placeholder="React JS, Redux, Firebase..."
                onChange={this.handleChangeTT}
                defaultValue={this.props.tt}
              />
            </Form.Group>
          </Card>

          <Card body style={bgcolor}>
            <Form.Group controlId="formGroupTE">
              {" "}
              {/* Technical Electives */}
              <Form.Label>Technical Electives</Form.Label>
              <Form.Control className="inputStyle" style={bgcolor}
                as="textarea"
                rows="3"
                placeholder="Software Engineering, Operating System..."
                onChange={this.handleChangeTE}
                defaultValue={this.props.te}
              />
            </Form.Group>
          </Card>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    aoi: state.skillRed_1.areaOfInterest_1,
    pl: state.skillRed_1.proLanguages_1,
    tt: state.skillRed_1.toolsAndTech_1,
    te: state.skillRed_1.techElectives_1,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAOI: aoi => {
      dispatch({ type: "UPDATE_AOI_1", aoi: aoi });
    },
    updatePL: pl => {
      dispatch({ type: "UPDATE_PL_1", pl: pl });
    },
    updateTT: tt => {
      dispatch({ type: "UPDATE_TT_1", tt: tt });
    },
    updateTE: te => {
      dispatch({ type: "UPDATE_TE_1", te: te });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsInfo);
