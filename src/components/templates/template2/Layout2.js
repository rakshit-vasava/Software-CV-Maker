import React, { Component } from "react";
import logo from "./assets/daiict-logo.jpg";
import { connect } from "react-redux";
import "./style/TemplateStyle.css";
import { Container, Row, Col } from "react-bootstrap";

class Layout2 extends Component {
  updateExpDescriptionBlocks = descBlocks => {
    let newDescBlocks = [];

    for (let [index, value] of descBlocks.entries()) {
      newDescBlocks.push(
        <ul
          key={index}
          className="list points"
          style={{ padding: "0px", margin: "0px" }}
        >
          <li className="small1">{value.descInfo}</li>
        </ul>
      );
    }

    return newDescBlocks;
  };

  updateExpKeyAchvBlocks = keyAchvBlocks => {
    let newKeyAchvBlocks = [];

    for (let [index, value] of keyAchvBlocks.entries()) {
      newKeyAchvBlocks.push(
        <ul
          key={index}
          className="list points"
          style={{ padding: "0px", margin: "0px" }}
        >
          <li className="small1">{value.keyAchvInfo}</li>
        </ul>
      );
    }

    return newKeyAchvBlocks;
  };

  updateExperienceBlock = () => {
    let newExpBlocks = [];

    for (let [index, value] of this.props.expBlocks.entries()) {
      newExpBlocks.push(
        <Row key={index}>
          <Col sm={2} className="timeRange">
            <h6 className="date">{value.start} - {value.end}</h6>
          </Col>

          <Col sm={10}>
            <div style={{ textAlign: "left" }}>
              <p>
                <b className="posTitle">{value.positionName}</b>
                <p className="orgName">{value.organizationName}</p>
                {this.updateExpDescriptionBlocks(value.descBlocks)}
              </p>

              <b
                className={
                  value.keyAchvBlocks.length > 0 ? "subHeading" : "hide"
                }
              >
                Key Achievment:
              </b>
              {this.updateExpKeyAchvBlocks(value.keyAchvBlocks)}

              <br />
            </div>
          </Col>
        </Row>
      );
    }

    return newExpBlocks;
  };

  updateDegreeBlock = () => {
    let newDegreeBlocks = [];

    for (let [index, value] of this.props.degreeBlocks.entries()) {
      newDegreeBlocks.push(
        <Row key={index}>
          <Col sm={2} className="timeRange">
          <h6 className="date">{value.year}</h6>
          </Col>

          <Col sm={10} style={{ textAlign: "left" }}>
            <p>
              <b className="posTitle">{value.degreeName}</b>
              <p className="orgName">{value.instituteName}</p>
            </p>
          </Col>
        </Row>
      );
    }

    return newDegreeBlocks;
  };

  updateAwardBlock = () => {
    let newAwardBlocks = [];

    for (let [index, value] of this.props.awardBlocks.entries()) {
      newAwardBlocks.push(
        <Row key={index}>
          <Col sm={2} className="timeRange">
          <h6 className="text1">{value.year}</h6>
          </Col>

          <Col sm={10} style={{ textAlign: "left" }}>
            <p className="awards">{value.information}</p>
          </Col>
        </Row>
      );
    }

    return newAwardBlocks;
  };

  updateSkillBlock = () => {
    let newSkillBlocks = [];

    for (let [index, value] of this.props.skillBlocks.entries()) {
      newSkillBlocks.push(
        <div style={{ margin: "5px", display: "block" }}>
          <p className="points" style={{ textAlign: "left", display: "block" }}>
            {value.skillName}
          </p>

          <div className="circleVector">
            <div className="blackCircle" />
            <div
              className={value.skillLevel > 1 ? "blackCircle" : "whiteCircle"}
            />
            <div
              className={value.skillLevel > 2 ? "blackCircle" : "whiteCircle"}
            />
            <div
              className={value.skillLevel > 3 ? "blackCircle" : "whiteCircle"}
            />
            <div
              className={value.skillLevel > 4 ? "blackCircle" : "whiteCircle"}
            />
          </div>
        </div>
      );
    }

    return newSkillBlocks;
  };

  updateLanguageBlock = () => {
    let newLanguageBlocks = [];

    for (let [index, value] of this.props.languageBlocks.entries()) {
      newLanguageBlocks.push(
        <div style={{ margin: "5px", display: "block" }}>
          <p className="points" style={{ textAlign: "left", display: "block" }}>
            {value.languageName}
          </p>

          <div className="circleVector">
            <div className="blackCircle" />
            <div
              className={
                value.languageLevel > 1 ? "blackCircle" : "whiteCircle"
              }
            />
            <div
              className={
                value.languageLevel > 2 ? "blackCircle" : "whiteCircle"
              }
            />
            <div
              className={
                value.languageLevel > 3 ? "blackCircle" : "whiteCircle"
              }
            />
            <div
              className={
                value.languageLevel > 4 ? "blackCircle" : "whiteCircle"
              }
            />
          </div>
        </div>
      );
    }

    return newLanguageBlocks;
  };

  updateHobbyBlock = () => {
    let newHobbyBlocks = [];

    for (let [index, value] of this.props.hobbyBlocks.entries()) {
      newHobbyBlocks.push(
        <ul
          key={index}
          className="list points"
          style={{ padding: "0px", margin: "0px" }}
        >
          <li className="small1">{value.information}</li>
        </ul>
      );
    }

    return newHobbyBlocks;
  };

  render() {
    /*let newDegreeBlocks = this.props.degreeBlocks.map((value,index) => {
            return (
                <tr key={index}>
                    <td style={{textAlign: "left", padding: '10px'}}> <b>{value.degreeName}</b> </td>
                    <td style={{textAlign: "left", padding: '10px'}}> {value.instituteName} </td>
                    <td style={{textAlign: "left", padding: '10px'}}> {value.year} </td>
                    <td style={{textAlign: "left", padding: '10px'}}> {value.score} </td>
                </tr>
            )
        })
        */

    return (
      <div>
        <div className="resume-render-wrapper2">
          <div className="resume-template2">
            <table className="main" style={{ marignBottom: "20px" }}>
              <thead>
                <tr>
                  <td
                    className={
                      this.props.image === null ? "hide" : "bodyImg img"
                    }
                  >
                    <img src={this.props.image} alt="image" />
                  </td>

                  <td
                    className={
                      this.props.image === null ? "body1" : "bodyImg w-100"
                    }
                  >
                    <h3 className="heading">{this.props.fullName}</h3>
                    <p>
                      <b className="posTitle">{this.props.curPos}</b>
                    </p>
                  </td>
                </tr>
              </thead>
            </table>

            <div className="outer">
              <div className="leftSide">
                <table className="section text-left">
                <h6 className="text1">{this.props.description}</h6>
                </table>

                <table
                  className={
                    this.props.expBlocks.length > 0
                      ? "w-100 section text-left"
                      : "hide"
                  }
                >
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading">Experience</h4>
                    </tr>
                  </thead>

                  <tbody>{this.updateExperienceBlock()}</tbody>
                </table>

                <table
                  className={
                    this.props.degreeBlocks.length > 0
                      ? "w-100 section text-left"
                      : "hide"
                  }
                >
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading">Education</h4>
                    </tr>
                  </thead>

                  <tbody>{this.updateDegreeBlock()}</tbody>
                </table>

                <table
                  className={
                    this.props.awardBlocks.length > 0 ? "w-100 section" : "hide"
                  }
                >
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading">Honours And Awards</h4>
                    </tr>
                  </thead>

                  <tbody>{this.updateAwardBlock()}</tbody>
                </table>
              </div>

              <div className="rightSide">
                <table className="section">
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading2" style={{fontWeight:"bold"}}>Personal Info</h4>
                    </tr>
                  </thead>

                  <tbody>
                    <br />
                    <tr className={this.props.address === "" ? "hide" : ""}>
                      <b>Address:</b>
                      <p> {this.props.address} </p>
                    </tr>

                    <tr className={this.props.dob === "" ? "hide" : ""}>
                      <b>DOB:</b>
                      <p>{this.props.dob}</p>
                    </tr>

                    <tr className={this.props.email === "" ? "hide" : ""}>
                      <b>Email:</b>
                      <p>{this.props.email}</p>
                    </tr>

                    <tr className={this.props.phoneNo === "" ? "hide" : ""}>
                      <b>Phone:</b>
                      <p>{this.props.phoneNo}</p>
                    </tr>

                    <tr className={this.props.link === "" ? "hide" : ""}>
                      <b>LinkedIn:</b>
                      <p>{this.props.link}</p>
                    </tr>
                  </tbody>
                </table>

                <table
                  className={
                    this.props.skillBlocks.length > 0 ? "section" : "hide"
                  }
                >
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading2" style={{fontWeight:"bold"}}>Skills</h4>
                    </tr>
                  </thead>

                  <tbody>{this.updateSkillBlock()}</tbody>
                </table>

                <table
                  className={
                    this.props.languageBlocks.length > 0 ? "section" : "hide"
                  }
                >
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading2" style={{fontWeight:"bold"}}>Languages</h4>
                    </tr>
                  </thead>

                  <tbody>{this.updateLanguageBlock()}</tbody>
                </table>

                <table
                  className={
                    this.props.hobbyBlocks.length > 0 ? "section" : "hide"
                  }
                >
                  <thead>
                    <tr className="section-header">
                      <h4 className="heading2" style={{fontWeight:"bold"}}>Interests</h4>
                    </tr>
                  </thead>

                  <tbody>{this.updateHobbyBlock()}</tbody>
                </table>
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
    image: state.imageRed_2.img_2,

    fullName: state.personRed_2.name_2,
    curPos: state.personRed_2.currentPosition_2,
    address: state.personRed_2.address_2,
    email: state.personRed_2.email_2,
    dob: state.personRed_2.dob_2,
    phoneNo: state.personRed_2.phoneNo_2,
    link: state.personRed_2.link_2,

    description: state.descriptionRed_2.description_2,

    expBlocks: state.expRed_2.expBlocks_2,

    degreeBlocks: state.educationRed_2.degreeBlocks_2,

    awardBlocks: state.awardRed_2.awardBlocks_2,

    skillBlocks: state.skillRed_2.skillBlocks_2,

    languageBlocks: state.languageRed_2.languageBlocks_2,

    hobbyBlocks: state.hobbyRed_2.hobbyBlocks_2
  };
};

export default connect(mapStateToProps)(Layout2);
