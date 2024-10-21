const initState = {
  cvList: []
};

const cvRed = (state = initState, action) => {
  //console.log('educationRed',state)

  if (action.type === "ADD_CV") {
    let newCvList = [...state.cvList, action.newCv];
    return {
      cvList: newCvList
    };
  } else if (action.type === "REMOVE_CV") {
    let newCvList = state.cvList.filter((value, index) => {
      return value.id !== action.id;
    });

    return {
      cvList: newCvList
    };
  }

  return state;
};

export default cvRed;
