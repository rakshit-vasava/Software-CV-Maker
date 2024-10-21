import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import firestore from "./../../../../firebase/firestore";
import "./compoStyle/componentsStyle.css";

class PersonalInfo extends Component {
  handleChangeCurPos = event => {
    this.props.updateCurPos(event.target.value);
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

  handleChangePhoneNo = event => {
    this.props.updatePhoneNo(event.target.value);
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

  handleChangeLink = event => {
    this.props.updateLink(event.target.value);
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
      .collection("profile")
      .doc(this.props.id)
      .set({
        name: this.props.name,
        curPos: this.props.curPos,
        email: this.props.email,
        dob: this.props.dob,
        address: this.props.address,
        phoneNo: this.props.phoneNo,
        link: this.props.link
      })
      .then(() => console.log("update profile"))
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    this.props.updateName("");
    this.props.updateCurPos("");
    this.props.updateEmail("");
    this.props.updateDOB("");
    this.props.updateAddress("");
    this.props.updateLink("");
    this.props.updatePhoneNo("");
  }
  componentDidMount() {
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.id)
      .collection("profile")
      .doc(this.props.id)
      .get()
      .then(resp => {
        let profile = resp.data();
        if (!profile) return null;
        this.props.updateName(profile.name);
        this.props.updateCurPos(profile.curPos);
        this.props.updateEmail(profile.email);
        this.props.updateDOB(profile.dob);
        this.props.updateAddress(profile.address);
        this.props.updateLink(profile.link);
        this.props.updatePhoneNo(profile.phoneNo);
      });
  }
  handleChangeName = event => {
    this.props.updateName(event.target.value);
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

  handleChangeEmail = event => {
    this.props.updateEmail(event.target.value);
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

  handleChangeDOB = event => {
    this.props.updateDOB(event.target.value);
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

  handleChangeAddress = event => {
    this.props.updateAddress(event.target.value);
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
    //console.log(this.props);
    const bgcolor = {
      backgroundColor:"#202020",
      color:"white",
      border:"none",
      
    }
    return (
      <div>
        <Form style={bgcolor}>
          <Form.Group controlId="formGroupFullName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              type="text"
              placeholder="Full Name"
              onChange={this.handleChangeName}
              defaultValue={this.props.name}
            />
          </Form.Group>

          <Form.Group controlId="formGroupCurPos">
            <Form.Label>Current Position</Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              type="text"
              placeholder="Software Devlopment Engineer"
              onChange={this.handleChangeCurPos}
              defaultValue={this.props.curPos}
            />
          </Form.Group>

          <Form.Group controlId="formGroupAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              as="textarea"
              rows="3"
              placeholder="Address"
              onChange={this.handleChangeAddress}
              defaultValue={this.props.address}
            />
          </Form.Group>

          <Form.Group controlId="formGroupDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              type="text"
              placeholder="April 15, 2020"
              onChange={this.handleChangeDOB}
              defaultValue={this.props.dob}
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              type="email"
              placeholder="Email"
              onChange={this.handleChangeEmail}
              defaultValue={this.props.email}
            />
          </Form.Group>

          <Form.Group controlId="formGroupPhone">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              type="text"
              placeholder="+91 1234567890"
              onChange={this.handleChangePhoneNo}
              defaultValue={this.props.phoneNo}
            />
          </Form.Group>

          <Form.Group controlId="formGroupLink">
            <Form.Label>LinkedIn: </Form.Label>
            <Form.Control className="inputStyle" style={bgcolor}
              type="text"
              placeholder="linkedin.com/in/name"
              onChange={this.handleChangeLink}
              defaultValue={this.props.link}
            />
          </Form.Group>
        </Form>

        {/*
                <div className="form basic-info-form">
                    <div className="form-input">
                        <label className="label">Name</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeName} />
                        </p>
                    </div>

                    <div className="form-input">
                        <label className="label">College Name</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeCollegeName} />
                        </p>
                    </div>
                    
                    <div className="form-input">
                        <label className="label">Email</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeEmail} />
                        </p>
                    </div>

                    <div className="form-input">
                        <label className="label">Date of Birth</label>
                        <p className="control">
                        <input className="input" type="text" onChange={this.handleChangeDOB} />
                        </p>
                    </div>

                    <div className="form-input">
                        <label className="label">Address</label>
                        <p className="control">
                        <textarea className="textarea input" type="text" onChange={this.handleChangeAddress}></textarea>
                        </p>
                    </div>
                </div>
                */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    name: state.personRed_2.name_2,
    curPos: state.personRed_2.currentPosition_2,
    email: state.personRed_2.email_2,
    dob: state.personRed_2.dob_2,
    address: state.personRed_2.address_2,
    phoneNo: state.personRed_2.phoneNo_2,
    link: state.personRed_2.link_2,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  //console.log(dispatch)
  //store.subscribe(()=>store.getState());
  return {
    updateName: name => {
      dispatch({ type: "UPDATE_NAME_2", name: name });
    },
    updateCurPos: curPos => {
      dispatch({ type: "UPDATE_CUR_POS_2", curPos: curPos });
    },
    updateEmail: email => {
      dispatch({ type: "UPDATE_EMAIL_2", email: email });
    },
    updateDOB: dob => {
      dispatch({ type: "UPDATE_DOB_2", dob: dob });
    },
    updateAddress: address => {
      dispatch({ type: "UPDATE_ADDRESS_2", address: address });
    },
    updatePhoneNo: phoneNo => {
      dispatch({ type: "UPDATE_PHONE_2", phoneNo: phoneNo });
    },
    updateLink: link => {
      dispatch({ type: "UPDATE_LINK_2", link: link });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
