import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Card } from "react-bootstrap";
import firestore from "./../../../../firebase/firestore";
import "./compoStyle/componentsStyle.css";

class DescriptionInfo extends Component {
  handleChangeDescription = event => {
    this.props.updateDescription(event.target.value);
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
    this.props.updateDescription("");
  }
  componentDidMount() {
    firestore
      .collection("description")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let description = resp.data();
        if (!description) return null;
        this.props.updateDescription(description.description);
      });
  }
  componentDidUpdate() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("description")
      .doc(this.props.id)
      .set({
        description: this.props.description_2
      })
      .then(() => console.log("update description"))
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const bgcolor = {
      backgroundColor:"#202020",
      color:"white",
      border:"none"
    }
    return (
      <div>
        <Form >
          <Form.Group controlId="formGroupDescription">
            <Form.Label>Your Description..</Form.Label>
            <Form.Control style={bgcolor} className="inputStyle"
              as="textarea"
              rows="3"
              placeholder="Description.."
              onChange={this.handleChangeDescription}
              defaultValue={this.props.description_2}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log('2',state);
  return {
    description_2: state.descriptionRed_2.description_2,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDescription: description => {
      dispatch({ type: "UPDATE_DESCRIPTION_2", description: description });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionInfo);
