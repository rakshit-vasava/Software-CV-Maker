import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import NavbarOriginal from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? (
    <SignedInLinks profile={profile} auth={auth} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <NavbarOriginal bg="dark" variant="dark" sticky="top" style={{paddingTop: '0', paddingBottom: '0'}}>
      <NavbarOriginal.Brand href="/">
        CV Maker
      </NavbarOriginal.Brand>
      <NavbarOriginal.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link >{links}</Nav.Link>
        </Nav>
      </NavbarOriginal.Collapse>
    </NavbarOriginal>

    
  );
};
const mapStatesToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStatesToProps)(Navbar);
