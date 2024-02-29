import { configureStore } from "@reduxjs/toolkit";

import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import cardsReducer from "../features/cards/cardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer, //6. Add topics slice to app store
    quizzes: quizzesReducer, //9e. Add quizzes slice to app store
    cards: cardsReducer, //14e. Add cards slice to app store
  },
});
