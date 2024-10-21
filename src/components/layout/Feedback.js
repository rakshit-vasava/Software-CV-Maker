import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import firestore from "../../firebase/firestore";
import Loader from "./../loader/Loader";
import '../style/feedbackStyle.css'

class Feedback extends React.Component {
  state = {
    review: "",
    error:"",
    isValid: false,
    isLoading: true
  };

  componentDidMount() {
    if (!this.props.auth.uid) {
      return <Redirect to="/signin" />;
    }
    this.setState({ isLoading: false });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    let fd = this.state,
      userId = this.props.auth.uid;
    firestore
      .collection("users")
      .doc(userId)
      .collection("feedbacks")
      .add({
        review: fd.review,
        createdAt: new Date(),
        userId: userId
      })
      .then(resp => {
        console.log("feedback added");
        this.setState({ isLoading: false });
        this.props.history.push(this.props.location.prevUrl);
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  handleChangeFeedback = e => {
    this.setState({
      [e.target.id]: e.target.value
    }, ()=>{ this.validateField(this.state.review)});
    /*this.setState({[name]: value}, 
      () => { this.validateField(name, value) });*/
  };

  validateField(value) {
    let isValid = this.state.isValid;
    let error= "";
    isValid = value.length > 0;
    isValid?error= ' ': error='feedback field is empty'  
    this.setState({
                    isValid: isValid,
                    error: error
                  });
    
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div className="containerFeedback">
        <div className = "bgfeedback"></div>

        <form onSubmit={this.handleSubmit}
              className= "form-conatinerFeedback"
        >
          <div className="form-groupFeedback">
            <center>
              <label className='title1Feedback'> 
                Feedback
              </label>
              <textarea
                type="text"
                rows="4"
                className="form-control"
                id="review"
                onChange={this.handleChangeFeedback}
                onFocus={() => this.state.error}
              />
            </center>
            <div className="text-danger">
              {this.state.error}
            </div>
            {/* {
              <span className='error'>error</span>}*/}
          </div>

          <div className="form-groupFeedback">
            <center>
              <button className="btn btn-primary"
                      type="submit" 
                      disabled={!this.state.isValid}
                      style={{margin: '10px'}}
              >
                Submit
              </button>
            </center>
          </div>
        
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Feedback);
