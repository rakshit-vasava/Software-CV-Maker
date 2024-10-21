import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import firebase from "./../../firebase/fbConfig";
import firestore from "./../../firebase/firestore";
import Loader from "./../loader/Loader";
import '../style/signupStyle.css'

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    isLoading: true,
    error: ""
  };
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            initials: this.state.firstName[0]
          });
      })
      .then(() => {
        console.log("signup success");
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false, error: err.message });
      });
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div className="conatinerSignUp">
        <div className="bgsignup"></div>
          <form onSubmit={this.handleSubmit}
                className='form-conatinerSignUp'
          >
            <h5 className='title1SignUp'>Sign Up</h5>
            <div className="form-groupSignUp">
            <label htmlFor="firstName"
                    className='title2SignUp'
            >
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-groupSignUp">
            <label htmlFor="lastName"
                   className='title2SignUp'
            >
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-groupSignUp">
            <label htmlFor="email"
                  className='title2SignUp'
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-groupSignUp">
            <label htmlFor="password"
                  className='title2SignUp'
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <center style={{margin:'10px'}}>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </center>
          <div className="form-groupSignUp">
            {authError ? <p style={{color:'red'}}>{authError}</p> : null}
          </div>
          <div className="form-groupSignUp">
            {this.state.error ? <p style={{color:'red'}}>{this.state.error}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
export default connect(mapStateToProps)(SignUp);
