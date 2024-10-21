const initState = {
  img: null
};

const imageRed = (state = initState, action) => {
  if (action.type === "UPLOAD_IMAGE") {
    return {
      ...state,
      img: action.img
    };
  } else if (action.type === "REMOVE_IMAGE") {
    return {
      ...state,
      img: null
    };
  }

  return state;
};

export default imageRed;
