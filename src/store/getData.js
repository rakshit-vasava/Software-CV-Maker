export const getCvs = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    console.log(
      firestore
        .collection("cvs")
        .where("userId", "==", userId)
        .get()
      /*.then(() => {
          dispatch({ type: "GET_CVS" });
        })
        .catch(err => {
          dispatch({ type: "GET_CVS_ERROR", err: err });
        })*/
    );
  };
};

export const getProfile = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("profiles")
      .doc(id)
      .get()
      .then(() => {
        dispatch({ type: "GET_PROFILE" });
      })
      .catch(err => {
        dispatch({ type: "GET_PROFILE_ERROR", err: err });
      });
  };
};
