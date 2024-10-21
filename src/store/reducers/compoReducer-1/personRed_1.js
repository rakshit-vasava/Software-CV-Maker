const initState = {
  name_1: "",
  collegeName_1: "",
  email_1: "",
  dob_1: "",
  address_1: ""
};

const personRed_1 = (state = initState, action) => {
  //console.log(state)
  if (action.type === "UPDATE_NAME_1") {
    return {
      ...state,
      name_1: action.name
    };
  } else if (action.type === "UPDATE_COLLEGENAME_1") {
    return {
      ...state,
      collegeName_1: action.collegeName
    };
  } else if (action.type === "UPDATE_EMAIL_1") {
    return {
      ...state,
      email_1: action.email
    };
  } else if (action.type === "UPDATE_DOB_1") {
    return {
      ...state,
      dob_1: action.dob
    };
  } else if (action.type === "UPDATE_ADDRESS_1") {
    return {
      ...state,
      address_1: action.address
    };
  }

  return state;
};

export default personRed_1;
