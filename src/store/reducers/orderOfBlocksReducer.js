import firestore from "./../../firebase/firestore";

const initState = {
  orderOfBlocks: []
};

const orderOfBlocksReducer = (state = initState, action) => {
  if (action.type === "UPDATE_ORDER_OF_BLOCKS") {
    if (state.orderOfBlocks !== action.orderOfBlocks) {
      firestore
        .collection("users")
        .doc(action.uid)
        .collection("cvs")
        .doc(action.cvid)
        .update({
          updatedAt: new Date(),
          orderOfBlocks: action.orderOfBlocks
        })
        .then(() =>
          console.log("update date and time.\nupdate order of blocks")
        )
        .catch(err => {
          console.log(err);
        });
    }
    return {
      ...state,
      orderOfBlocks: action.orderOfBlocks
    };
  } else if (action.type === "LOAD_ORDER_OF_BLOCKS") {
    return {
      ...state,
      orderOfBlocks: action.orderOfBlocks
    };
  }

  return state;
};

export default orderOfBlocksReducer;
