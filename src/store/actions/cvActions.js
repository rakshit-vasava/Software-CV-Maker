export const createCV = cv => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("cvs")
      .add({
        ...cv,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "CREATE_CV", cv: cv });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CV_ERROR", err: err });
      });
  };
};

export const updateProfile = (profile, id) => {
  console.log(profile);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("profile")
      .doc(id)
      .set({
        ...profile,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_PROFILE", profile: profile });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PROFILE_ERROR", err: err });
      });
  };
};

export const updateEducation = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("education")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_EDUCATION", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_EDUCATION_ERROR", err: err });
      });
  };
};

export const updateSkill = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("skill")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_SKILL", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_SKILL_ERROR", err: err });
      });
  };
};

export const updateInternship = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("internship")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_INTERNSHIP", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_INTERNSHIP_ERROR", err: err });
      });
  };
};

export const updateProject = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("project")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_PROJECT", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PROJECT_ERROR", err: err });
      });
  };
};

export const updatePosition = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("position")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_POSITION", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_POSITION_ERROR", err: err });
      });
  };
};

export const updateAward = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("award")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_AWARD", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_AWARD_ERROR", err: err });
      });
  };
};

export const updateHobby = (e, id) => {
  console.log(e);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("hobby")
      .doc(id)
      .set({
        ...e,
        id: id,
        createdAt: new Date(),
        userId: userId
      })
      .then(() => {
        dispatch({ type: "UPDATE_HOBBY", e: e });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_HOBBY_ERROR", err: err });
      });
  };
};
