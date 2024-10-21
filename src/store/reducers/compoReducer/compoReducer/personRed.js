const initState = {
  name: "",
  collegeName: "",
  email: "",
  dob: "",
  address: ""
};

const personRed = (state = initState, action) => {
  //console.log(state)
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: action.name
    };
  } else if (action.type === "UPDATE_COLLEGENAME") {
    return {
      ...state,
      collegeName: action.collegeName
    };
  } else if (action.type === "UPDATE_EMAIL") {
    return {
      ...state,
      email: action.email
    };
  } else if (action.type === "UPDATE_DOB") {
    return {
      ...state,
      dob: action.dob
    };
  } else if (action.type === "UPDATE_ADDRESS") {
    return {
      ...state,
      address: action.address
    };
  }

  return state;
};

export default personRed;
