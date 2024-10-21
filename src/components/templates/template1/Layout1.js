import React, { Component } from "react";
import { connect } from "react-redux";
import "./style/TemplateStyle.css";

class Layout1 extends Component {
  updateDegreeBlock = () => {
    let newDegreeBlocks = [];

    for (let [ind, val] of this.props.orderOfEducationBlocks.entries()) {
      for (let [index, value] of this.props.degreeBlocks.entries()) {
        if (val.id === value.id) {
          newDegreeBlocks.push(
            <tr key={index}>
              <td style={{ textAlign: "left" }}>
                {" "}
                <p style={{fontWeight:"bold"}} >{value.degreeName}</p>{" "}
              </td>
              <td 
                style={{ textAlign: "left", maxWidth: '250px', wordWrap: 'break-word' }}> <p>{value.instituteName}</p> </td>
              <td style={{ textAlign: "left" }}><p> {value.year}</p> </td>
              <td style={{ textAlign: "left" }}> <p>{value.score}</p> </td>
            </tr>
          );
          break;
        }
      }
    }
    return newDegreeBlocks;
  };

  updateInternshipBlock = () => {
    let newInternshipBlocks = [];

    for (let [index, value] of this.props.internshipBlocks.entries()) {
      newInternshipBlocks.push(
        <tr key={index}>
          <td
            className="w-20"
            style={{ textAlignVertical: "top", textAlign: "left" }}
          >
            <p>
              <b>{value.organizationName}</b>
            </p>
          </td>
          <td className="w-60" style={{ textAlignVertical: "top" }}>
            <p>{value.description}</p>

            <p style={{ textAlign: "left"}}>
              <i >
                <b>Guide:</b> <h6 className="text1"> {value.supervisor}</h6>
              </i>
            </p>
          </td>

          <td
            className="w-20"
            style={{ textAlignVertical: "top", textAlign: "right" }}
          >
            <p>
              ({value.start} - {value.end})
            </p>
            <p>Team Size - {value.teamSize}</p>
          </td>
        </tr>
      );
    }

    return newInternshipBlocks;
  };

  updateProjectBlock = () => {
    let newProjectBlocks = [];

    for (let [index, value] of this.props.projectBlocks.entries()) {
      newProjectBlocks.push(
        <tr key={index}>
          <td
            className="w-80"
            style={{ textAlignVertical: "top", textAlign: "left" }}
          >
            <p>
              <b>{value.projectName}</b>
            </p>
            <p>{value.description}</p>
            <p>
              <i>
                <b>Guide:</b> <h6 className="text1">{value.supervisor}</h6>
              </i>
            </p>
          </td>
          <td
            className="w-20"
            style={{ textAlignVertical: "top", textAlign: "right" }}
          >
            <p>
              ({value.start} - {value.end})
            </p>
            <p>Team Size - {value.teamSize}</p>
          </td>
        </tr>
      );
    }

    return newProjectBlocks;
  };

  updatePositionBlock = () => {
    let newPositionBlocks = [];

    for (let [index, value] of this.props.positionBlocks.entries()) {
      newPositionBlocks.push(
        <ul
          key={index}
          className="list"
          style={{ padding: "0px", margin: "0px", textAlign: "left" }}
        >
          <li>
            <p>{index + 1}. {value.information}</p>
          </li>
        </ul>
      );
    }

    return newPositionBlocks;
  };

  updateAwardBlock = () => {
    let newAwardBlocks = [];

    for (let [index, value] of this.props.awardBlocks.entries()) {
      newAwardBlocks.push(
        <ul
          key={index}
          className="list"
          style={{ padding: "0px", margin: "0px", textAlign: "left" }}
        >
          <li>
            <p>{index + 1}. {value.information}</p>
          </li>
        </ul>
      );
    }

    return newAwardBlocks;
  };

  updateHobbyBlock = () => {
    let newHobbyBlocks = [];

    for (let [index, value] of this.props.hobbyBlocks.entries()) {
      newHobbyBlocks.push(
        <ul
          key={index}
          className="list"
          style={{ padding: "0px", margin: "0px", textAlign: "left" }}
        >
          <li>
            <p>
            {index + 1}. {value.information}
            </p>
          </li>
        </ul>
      );
    }

    return newHobbyBlocks;
  };

  educationSection = () => {
    return (
      <table
        className={
          this.props.degreeBlocks.length > 0 ? "w-100 section" : "hide"
        }
      >
        <thead>
          <tr>
            <td colSpan="4" className="section-header">
              <h3 className="heading">EDUCATION</h3>
            </td>
          </tr>

          <tr>
            <th colSpan="1"><p>Degree </p></th>
            <th colSpan="1"><p>University/Institute </p></th>
            <th colSpan="1"><p>Year </p></th>
            <th colSpan="1"><p>CPI/Aggregate </p></th>
          </tr>
        </thead>

        {/*console.log('2',this.props.degreeBlocks)*/}
        <tbody>{this.updateDegreeBlock()}</tbody>
      </table>
    );
  };

  skillSection = () => {
    return (
      <table
        className={
          this.props.areaOfInterest !== "" ||
          this.props.proLanguages !== "" ||
          this.props.toolsAndTech !== "" ||
          this.props.techElectives !== ""
            ? "w-100 section"
            : "hide"
        }
      >
        <thead>
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="heading">SKILLS</h3>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr className={this.props.areaOfInterest.length > 0 ? "" : "hide"}>
            <td className="w-30">
              <b>
                Expertise Area/Area(s) of Interest
              </b>
            </td>

            <td className="w-70" style={{ textAlign: "left" }}>
              <h6 className="text1">{this.props.areaOfInterest}</h6>
            </td>
          </tr>

          <tr className={this.props.proLanguages.length > 0 ? "" : "hide"}>
            <td className="w-30">
              <b >Programming Language(s)</b>
            </td>
            <td className="w-70" style={{ textAlign: "left" }}>
            <h6 className="text1">{this.props.proLanguages}</h6>
            </td>
          </tr>

          <tr className={this.props.toolsAndTech.length > 0 ? "" : "hide"}>
            <td className="w-30">
              <b>Tools and Technologies</b>
            </td>
            <td className="w-70" style={{ textAlign: "left" }}>
            <h6 className="text1">{this.props.toolsAndTech}</h6>
            </td>
          </tr>

          <tr className={this.props.techElectives.length > 0 ? "" : "hide"}>
            <td className="w-30">
              <b>Technical Electives</b>
            </td>
            <td className="w-70" style={{ textAlign: "left" }}>
            <h6 className="text1">{this.props.techElectives}</h6>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  internshipSection = () => {
    return (
      <table
        className={
          this.props.internshipBlocks.length > 0 ? "w-100 section" : "hide"
        }
      >
        <thead>
          <tr>
            <td colSpan="3" className="section-header">
              <h3 className="heading">PROFESSIONAL EXPERIENCE/INTERNSHIPS</h3>
            </td>
          </tr>
        </thead>

        <tbody>{this.updateInternshipBlock()}</tbody>
      </table>
    );
  };

  projectSection = () => {
    return (
      <table
        className={
          this.props.projectBlocks.length > 0 ? "w-100 section" : "hide"
        }
      >
        <thead>
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="heading">PROJECTS</h3>
            </td>
          </tr>
        </thead>

        <tbody>{this.updateProjectBlock()}</tbody>
      </table>
    );
  };

  responsibilitySection = () => {
    return (
      <table
        className={
          this.props.positionBlocks.length > 0 ? "w-100 section" : "hide"
        }
      >
        <thead>
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="heading">POSITION OF RESPONSIBILITY</h3>
            </td>
          </tr>
        </thead>

        <tbody>{this.updatePositionBlock()}</tbody>
      </table>
    );
  };

  awardSection = () => {
    return (
      <table
        className={this.props.awardBlocks.length > 0 ? "w-100 section" : "hide"}
      >
        <thead>
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="heading">AWARDS AND ACHIEVEMENTS</h3>
            </td>
          </tr>
        </thead>

        <tbody>{this.updateAwardBlock()}</tbody>
      </table>
    );
  };

  hobbySection = () => {
    return (
      <table
        className={this.props.hobbyBlocks.length > 0 ? "w-100 section" : "hide"}
      >
        <thead>
          <tr>
            <td colSpan="2" className="section-header">
              <h3 className="heading">INTERESTS AND HOBBIES</h3>
            </td>
          </tr>
        </thead>

        <tbody>{this.updateHobbyBlock()}</tbody>
      </table>
    );
  };

  sectionOrderDisplay = () => {
    let orderedSections = [];

    for (let [, value] of this.props.orderOfBlocks.entries()) {
      if (value.id === 1) {
        orderedSections.push(this.educationSection());
      } else if (value.id === 2) {
        orderedSections.push(this.skillSection());
      } else if (value.id === 3) {
        orderedSections.push(this.internshipSection());
      } else if (value.id === 4) {
        orderedSections.push(this.projectSection());
      } else if (value.id === 5) {
        orderedSections.push(this.responsibilitySection());
      } else if (value.id === 6) {
        orderedSections.push(this.awardSection());
      } else if (value.id === 7) {
        orderedSections.push(this.hobbySection());
      }
    }

    return orderedSections;
  };

  render() {
    
    return (
      <div>
        <div className="resume-render-wrapper1" >
          <div className="resume-template1">
            <table className="main" style={{ marignBottom: "20px" }}>
              <thead>
                <tr>
                  <td className={this.props.image === null ? "hide" : "w-20"}>
                    <img src={this.props.image} alt="image" />
                  </td>

                  <td
                    className={
                      this.props.image === null ? "intro w-100" : "intro w-80"
                    }
                  >
                    <h1 className="heading">{this.props.fullName}</h1>
                    <p>
                      <b>
                        {this.props.collegeName}
                      </b>
                    </p>
                    <p>
                      <span className="w-60 inline-block text1">
                        <b >Email:</b>{" "}
                        {this.props.email}
                      </span>
                      <span className="w-40 text-right text1">
                        <b>DOB:</b>{" "}
                        {this.props.dob}
                      </span>
                    </p>
                    <p>
                      <b>Address:</b>{" "}
                      <h6 className="text1">{this.props.address}</h6>
                    </p>
                  </td>
                </tr>
              </thead>
            </table>

            {this.sectionOrderDisplay()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.imageRed_1.img_1,

    fullName: state.personRed_1.name_1,
    collegeName: state.personRed_1.collegeName_1,
    email: state.personRed_1.email_1,
    dob: state.personRed_1.dob_1,
    address: state.personRed_1.address_1,

    degreeBlocks: state.educationRed_1.degreeBlocks_1,
    orderOfEducationBlocks:
      state.orderOfEducationBlocksRed.orderOfEducationBlocks,

    areaOfInterest: state.skillRed_1.areaOfInterest_1,
    proLanguages: state.skillRed_1.proLanguages_1,
    toolsAndTech: state.skillRed_1.toolsAndTech_1,
    techElectives: state.skillRed_1.techElectives_1,

    internshipBlocks: state.internshipRed_1.internshipBlocks_1,

    projectBlocks: state.projectRed_1.projectBlocks_1,

    positionBlocks: state.positionRed_1.positionBlocks_1,

    awardBlocks: state.awardRed_1.awardBlocks_1,

    hobbyBlocks: state.hobbyRed_1.hobbyBlocks_1,

    orderOfBlocks: state.orderOfBlocksRed.orderOfBlocks
  };
};

export default connect(mapStateToProps)(Layout1);
