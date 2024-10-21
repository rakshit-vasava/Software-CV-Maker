import authReducer from "./authReducer";
import cvReducer from "./cvReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { FirebaseReducer, firebaseReducer } from "react-redux-firebase";

import personRed_1 from "./compoReducer-1/personRed_1";
import educationRed_1 from "./compoReducer-1/educationRed_1";
import skillRed_1 from "./compoReducer-1/skillRed_1";
import internshipRed_1 from "./compoReducer-1/internshipRed_1";
import projectRed_1 from "./compoReducer-1/projectRed_1";
import positionRed_1 from "./compoReducer-1/positionRed_1";
import awardRed_1 from "./compoReducer-1/awardRed_1";
import hobbyRed_1 from "./compoReducer-1/hobbyRed_1";
import imageRed_1 from "./compoReducer-1/imageRed_1";

import imageRed_2 from "./compoReducer-2/imageRed_2";
import personRed_2 from "./compoReducer-2/personRed_2";
import descriptionRed_2 from "./compoReducer-2/descriptionRed_2";
import expRed_2 from "./compoReducer-2/expRed_2";
import educationRed_2 from "./compoReducer-2/educationRed_2";
import awardRed_2 from "./compoReducer-2/awardRed_2";
import skillRed_2 from "./compoReducer-2/skillRed_2";
import languageRed_2 from "./compoReducer-2/languageRed_2";
import hobbyRed_2 from "./compoReducer-2/hobbyRed_2";

import prevUrlReducer from "./prevUrlReducer";
import orderOfBlocksReducer from "./orderOfBlocksReducer";
import orderOfEducationBlocksRed from "./orderOfEducationBlocksRed";

const rootReducer = combineReducers({
  orderOfEducationBlocksRed: orderOfEducationBlocksRed,
  orderOfBlocksRed: orderOfBlocksReducer,
  prevUrlRed: prevUrlReducer,
  auth: authReducer,
  cvRed: cvReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,

  personRed_1: personRed_1,
  educationRed_1: educationRed_1,
  skillRed_1: skillRed_1,
  internshipRed_1: internshipRed_1,
  projectRed_1: projectRed_1,
  positionRed_1: positionRed_1,
  awardRed_1: awardRed_1,
  hobbyRed_1: hobbyRed_1,
  imageRed_1: imageRed_1,

  personRed_2: personRed_2,
  descriptionRed_2: descriptionRed_2,
  educationRed_2: educationRed_2,
  skillRed_2: skillRed_2,
  expRed_2: expRed_2,
  awardRed_2: awardRed_2,
  languageRed_2: languageRed_2,
  hobbyRed_2: hobbyRed_2,
  imageRed_2: imageRed_2
});

export default rootReducer;
