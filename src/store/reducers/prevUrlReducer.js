const initState = {
  prevUrl: ""
};

const prevUrlReducer = (state = initState, action) => {
  //console.log(state)
  if (action.type === "UPDATE_PREVURL") {
    return {
      ...state,
      prevUrl: action.prevUrl
    };
  }

  return state;
};

export default prevUrlReducer;
