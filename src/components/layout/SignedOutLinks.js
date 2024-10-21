import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class SignedOutLinks extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        {/*<li className="nav-item">
          <Link className="btn btn-outline-secondary" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item" style={{ marginLeft: "5px" }}>
          <Link
            className="btn btn-outline-secondary"
            to="/signin"
            onClick={this.handleClick}
          >
            Sign In
          </Link>
  </li>*/}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignedOutLinks);
