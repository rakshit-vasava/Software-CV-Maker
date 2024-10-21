import React, { Component } from "react";
import SidebarAndLayout1 from "../templates/template1/SidebarAndLayout1";
import SidebarAndLayout2 from "./../templates/template2/SidebarAndLayout2";
import NavbarBottom from "./../layout/NavbarBottom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "./../loader/Loader";
import { Link } from "react-router-dom";
import firestore from "./../../firebase/firestore";

class CvEditor extends Component {
  state = { title: "", isLoading: true, templateId: null };
  _isMounted = false;
  componentDidMount() {
    this._isMounted = true;
    if (!this.props.auth.uid) {
      return <Redirect to="/signin" />;
    }
    let prevUrl = this.props.prevUrl;
    /*window.onpopstate = e => {
      if (prevUrl !== "/cvlist") this.props.history.push("/");
    };*/
    firestore
      .collection("users")
      .doc(this.props.auth.uid)
      .collection("cvs")
      .doc(this.props.match.params.id)
      .get()
      .then(resp => {
        if (resp.data().templateId === 1) {
          this.props.loadOrderOfBlocks(resp.data().orderOfBlocks);
          this.props.loadOrderOfEducationBlocks(
            resp.data().orderOfEducationBlocks
          );
        }
        this.setState({
          title: resp.data().title,
          isLoading: false,
          templateId: resp.data().templateId
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
    this.props.updatePrevUrl(window.location.pathname);
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div style={{padding: '0', margin: '0'}}>
        {this.state.templateId === 1 ? (
          <SidebarAndLayout1
            id={this.props.match.params.id}
            title={this.state.title}
            templateId={this.state.templateId}
          />
        ) : null}
        {this.state.templateId === 2 ? (
          <SidebarAndLayout2
            id={this.props.match.params.id}
            title={this.state.title}
            templateId={this.state.templateId}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    prevUrl: state.prevUrlRed.prevUrl,
    orderOfBlocks: state.orderOfBlocksRed.orderOfBlocks,
    orderOfEducationBlocks:
      state.orderOfEducationBlocksRed.orderOfEducationBlocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePrevUrl: prevUrl => {
      dispatch({
        type: "UPDATE_PREVURL",
        prevUrl: prevUrl
      });
    },
    updateOrderOfBlocks: (orderOfBlocks, uid, cvid) => {
      dispatch({
        type: "UPDATE_ORDER_OF_BLOCKS",
        orderOfBlocks: orderOfBlocks,
        uid: uid,
        cvid: cvid
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
    loadOrderOfBlocks: orderOfBlocks => {
      dispatch({
        type: "LOAD_ORDER_OF_BLOCKS",
        orderOfBlocks: orderOfBlocks
      });
    },
    loadOrderOfEducationBlocks: orderOfEducationBlocks => {
      dispatch({
        type: "LOAD_ORDER_OF_EDUCATION_BLOCKS",
        orderOfEducationBlocks: orderOfEducationBlocks
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CvEditor);
