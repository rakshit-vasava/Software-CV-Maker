import firestore from "./../../firebase/firestore";

const initState = {
  orderOfEducationBlocks: []
};

const orderOfEducationBlocksRed = (state = initState, action) => {
  if (action.type === "ADD_ORDER_OF_EDUCATION_BLOCK") {
    let newOrderOfEducationBlocks = [
      ...state.orderOfEducationBlocks,
      action.newBlock
    ];
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date(),
        orderOfEducationBlocks: newOrderOfEducationBlocks
      })
      .then(() =>
        console.log("update date and time.\nupdate order of education blocks")
      )
      .catch(err => {
        console.log(err);
      });
    return {
      orderOfEducationBlocks: newOrderOfEducationBlocks
    };
  } else if (action.type === "REMOVE_ORDER_OF_EDUCATION_BLOCK") {
    let newOrderOfEducationBlocks = state.orderOfEducationBlocks.filter(
      (value, index) => {
        return value.id !== action.id;
      }
    );
    firestore
      .collection("users")
      .doc(action.uid)
      .collection("cvs")
      .doc(action.cvid)
      .update({
        updatedAt: new Date(),
        orderOfEducationBlocks: newOrderOfEducationBlocks
      })
      .then(() =>
        console.log("update date and time.\nupdate order of education blocks")
      )
      .catch(err => {
        console.log(err);
      });
    return {
      orderOfEducationBlocks: newOrderOfEducationBlocks
    };
  } else if (action.type === "UPDATE_ORDER_OF_EDUCATION_BLOCKS") {
    if (state.orderOfEducationBlocks !== action.orderOfEducationBlocks) {
      firestore
        .collection("users")
        .doc(action.uid)
        .collection("cvs")
        .doc(action.cvid)
        .update({
          updatedAt: new Date(),
          orderOfEducationBlocks: action.orderOfEducationBlocks
        })
        .then(() =>
          console.log("update date and time.\nupdate order of education blocks")
        )
        .catch(err => {
          console.log(err);
        });
    }
    return {
      ...state,
      orderOfEducationBlocks: action.orderOfEducationBlocks
    };
  } else if (action.type === "LOAD_ORDER_OF_EDUCATION_BLOCKS") {
    return {
      ...state,
      orderOfEducationBlocks: action.orderOfEducationBlocks
    };
  }

  return state;
};

export default orderOfEducationBlocksRed;
