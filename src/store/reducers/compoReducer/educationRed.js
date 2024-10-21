const initState = {
  degreeBlocks: []
};

const educationRed = (state = initState, action) => {
  //console.log('educationRed',state)

  if (action.type === "ADD_EDUCATION_BLOCK") {
    let newDegreeBlocks = [...state.degreeBlocks, action.newBlock];
    return {
      degreeBlocks: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_DEGREE_NAME") {
    let newDegreeBlocks = state.degreeBlocks;
    for (let [index, value] of newDegreeBlocks.entries()) {
      //console.log('id',value.id,action.id);
      //console.log(state);
      if (value.id === action.id) {
        value.degreeName = action.degreeName;
        break;
      }
    }

    return {
      degreeBlocks: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_INSTITUTE_NAME") {
    let newDegreeBlocks = state.degreeBlocks;
    for (let [index, value] of newDegreeBlocks.entries()) {
      if (value.id === action.id) {
        value.instituteName = action.instituteName;
        break;
      }
    }

    return {
      degreeBlocks: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_YEAR") {
    let newDegreeBlocks = state.degreeBlocks;
    for (let [index, value] of newDegreeBlocks.entries()) {
      if (value.id === action.id) {
        value.year = action.year;
        break;
      }
    }

    return {
      degreeBlocks: newDegreeBlocks
    };
  } else if (action.type === "UPDATE_EDUCATION_SCORE") {
    let newDegreeBlocks = state.degreeBlocks;
    for (let [index, value] of newDegreeBlocks.entries()) {
      if (value.id === action.id) {
        value.score = action.score;
        break;
      }
    }

    return {
      degreeBlocks: newDegreeBlocks
    };
  } else if (action.type === "REMOVE_EDUCATION_BLOCK") {
    let newDegreeBlocks = state.degreeBlocks.filter((value, index) => {
      return value.id !== action.id;
    });

    return {
      degreeBlocks: newDegreeBlocks
    };
  }

  return state;
};

export default educationRed;
