const initState = {
  img_1: null
};

const imageRed_1 = (state = initState, action) => {
  if (action.type === "UPLOAD_IMAGE_1") {
    return {
      ...state,
      img_1: action.img
    };
  } else if (action.type === "REMOVE_IMAGE_1") {
    return {
      ...state,
      img_1: null
    };
  }

  return state;
};

export default imageRed_1;
