import { Link } from "react-router-dom";
import firestore from "../../firebase/firestore";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./../css/loader.css";
import Loader from "../loader/Loader";
import moment from "moment";
import { Redirect } from "react-router-dom";
import '../style/templatelist.css'

class TemplateList extends Component {
  state = { isLoading: true };

  componentWillUnmount() {}
  componentDidMount() {
    this.props.updatePrevUrl(window.location.pathname);
    this.setState({ isLoading: false });
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return this.state.isLoading ? (
      <Loader />
    ) : (
        <div className="container-fluid d-flex justify-content-center" style={{position: "absolute",left: "0%", top: "6%", right:"0%",background:"#202020", bottom:"0%"}}>

      <div className="row rowTempList" style={{ background:"#202020", top:"100%", bottom:"0%"}}>
        <div
          className="col-md-6 "
          key="1"
          style={{
            marginTop: "100px",
            background:"#202020",
            top:"0%",
            bottom:"20%"
          }}
        >
          
            <div className="card-body cardBodyTempList">
              <div className="card bg-dark text-white cardHover">
              <img class="card-img" src="https://picsum.photos/300/200" alt="Card image" ></img>
                  <div className="card-img-overlay">
                    <h2 className="card-title titleTempList">Template 1</h2>
                    <p className="card-text textTempList"></p>
                    <Link
                    to={{
                      pathname: "/createcv",
                      templateId: 1
                        }}
                      className="stretched-link"
                    ></Link>
                  </div>
              </div>
            </div>
          </div>


        <div
          className="col-md-6 "
          key={2}
          style={{
            marginTop: "100px",
            background:"#202020",
            top:"0%",
            bottom:"100%"
          }}
        >
          <div >

            <div className="card-body cardBodyTempList">
              <div className="card bg-dark text-white cardHover">
                <img class="card-img" src="https://picsum.photos/300/200" alt="Card image" ></img>
                <div className="card-img-overlay">
                  <h2 className="card-title titleTempList">Template 2</h2>
                  <p className="card-text textTempList"></p>
                  <Link to={{ pathname: "/createcv", templateId: 2 }}className="stretched-link"></Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    prevUrl: state.prevUrlRed.prevUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePrevUrl: prevUrl => {
      dispatch({
        type: "UPDATE_PREVURL",
        prevUrl: prevUrl
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);

/*
<div className="row" style={{ margin: "5px" }}>
        <div
          className="col-md-2 col-sm-4"
          key={1}
          style={{
            marginTop: "10px"
          }}
        >
          <div
            className="card border-dark"
            style={{
              minHeight: "200px"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Template 1</h5>
              <p className="card-text"></p>
              <Link
                to={{
                  pathname: "/createcv",
                  templateId: 1
                }}
                className="stretched-link"
              ></Link>
            </div>
          </div>
        </div>
        <div
          className="col-md-2 col-sm-4"
          key={2}
          style={{
            marginTop: "10px"
          }}
        >
          <div
            className="card border-dark"
            style={{
              minHeight: "200px"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Template 2</h5>
              <p className="card-text"></p>
              <Link
                to={{
                  pathname: "/createcv",
                  templateId: 2
                }}
                className="stretched-link"
              ></Link>
            </div>
          </div>
        </div>
      </div>

*/