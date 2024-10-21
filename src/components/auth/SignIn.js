import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import firebase from "./../../firebase/fbConfig";
import Loader from "./../loader/Loader";
import { Link } from "react-router-dom";
import '../style/signinStyle.css'

class SignIn extends Component {
  state = {
    email: "",
    password: "",
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
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("signin success");
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
      <div className="containerSignIn">
        <div className = "bgsignin"></div>

        <form onSubmit={this.handleSubmit}
              className='form-conatinerSignIn'
        >
          <h5 className = 'title1SignIn'>
            Sign In
          </h5>

          <div className="form-groupSignIn">
            <label htmlFor="email" className='title2SignIn'>
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
          <div className="form-groupSignIn">
            <label htmlFor="password"
                    className='title2SignIn'
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

          <center>
            <div>
              <button type="submit" 
                      className="btn btn-primary"
                      style={{margin: '10px'}}
              >
                Sign In
              </button>
            </div>
            <div style={{ margin: "10px", fontSize: '18px',
                          color: '#fff'}}>
              New user? 
              <Link to="/signup">
                <button className="btn btn-primary btn-sm"
                        style={{margin: '5px'}}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </center>

          <div className="form-group">
            {authError ? <p style={{color: 'white'}}>{authError}</p> : null}
          </div>
          <div className="form-group">
            {this.state.error ? <p style={{color: 'white'}}>{this.state.error}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
