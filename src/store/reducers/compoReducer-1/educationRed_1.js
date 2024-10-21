import firestore from "./../../../firebase/firestore";
import { connect } from "react-redux";

const initState = {
  degreeBlocks_1: []
};

const educationRed_1 = (state = initState, action) => {
  //console.log('educationRed',state)
  //console.log(props);
  if (action.type === "ADD_DUMMY_BLOCK_1") {
    let newDegreeBlocks = [...state.degreeBlocks_1, action.dummyBlock];
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "REMOVE_DUMMY_BLOCK_1") {
    let newDegreeBlocks = state.degreeBlocks_1.filter((value, index) => {
      return value.id !== action.id;
    });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "ADD_EDUCATION_BLOCK_1") {
    let newDegreeBlocks = [...state.degreeBlocks_1, action.newBlock];
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .collection("education")
      .doc(action.cvid)
      .set({
        ...newDegreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time."))
      .catch(err => {
        console.log(err);
      });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_DEGREE_NAME_1") {
    let newDegreeBlocks = state.degreeBlocks_1;
    for (let [index, value] of newDegreeBlocks.entries()) {
      //console.log('id',value.id,action.id);
      //console.log(state);
      if (value.id === action.id) {
        value.degreeName = action.degreeName;
        break;
      }
    }
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .collection("education")
      .doc(action.cvid)
      .set({
        ...newDegreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time."))
      .catch(err => {
        console.log(err);
      });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_INSTITUTE_NAME_1") {
    let newDegreeBlocks = state.degreeBlocks_1;
    for (let [index, value] of newDegreeBlocks.entries()) {
      if (value.id === action.id) {
        value.instituteName = action.instituteName;
        break;
      }
    }
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .collection("education")
      .doc(action.cvid)
      .set({
        ...newDegreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time."))
      .catch(err => {
        console.log(err);
      });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_YEAR_1") {
    let newDegreeBlocks = state.degreeBlocks_1;
    for (let [index, value] of newDegreeBlocks.entries()) {
      if (value.id === action.id) {
        value.year = action.year;
        break;
      }
    }
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .collection("education")
      .doc(action.cvid)
      .set({
        ...newDegreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time."))
      .catch(err => {
        console.log(err);
      });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_SCORE_1") {
    let newDegreeBlocks = state.degreeBlocks_1;
    for (let [index, value] of newDegreeBlocks.entries()) {
      if (value.id === action.id) {
        value.score = action.score;
        break;
      }
    }
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .collection("education")
      .doc(action.cvid)
      .set({
        ...newDegreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time."))
      .catch(err => {
        console.log(err);
      });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "REMOVE_EDUCATION_BLOCK_1") {
    let newDegreeBlocks = state.degreeBlocks_1.filter((value, index) => {
      return value.id !== action.id;
    });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .collection("education")
      .doc(action.cvid)
      .set({
        ...newDegreeBlocks
      })
      .then(() => console.log("update education"))
      .catch(err => {
        console.log(err);
      });
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date()
      })
      .then(() => console.log("update date and time."))
      .catch(err => {
        console.log(err);
      });
    return {
      degreeBlocks_1: newDegreeBlocks
    };
  } else if (action.type === "REMOVE_ALL_EDUCATION_BLOCKS_1") {
    return {
      degreeBlocks_1: []
    };
  } else if (action.type === "LOAD_ALL_EDUCATION_BLOCKS_1") {
    return {
      degreeBlocks_1: action.blocks
    };
  }

  return state;
};

export default educationRed_1;
