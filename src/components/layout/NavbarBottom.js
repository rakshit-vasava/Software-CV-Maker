import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavbarBottom extends Component {
  handleClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="btn btn-success ml-auto"
            onClick={this.handleClick}
          >
            Preview
          </button>
        </div>
      </nav>
    );
  }
}
const mapStatesToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStatesToProps, mapDispatchToProps)(NavbarBottom);
