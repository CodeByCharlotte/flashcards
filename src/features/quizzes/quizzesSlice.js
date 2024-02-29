//9a. Create a Slice called QuizzesSlice
import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: { quizzes: {} }, //9b. Initial state consisting of an object that includes one property, quizzes
  reducers: {
    //9c. An addQuiz action
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    },
  },
});

//9d. Selector that returns all quizzes from state
export const quizzesSelector = (state) => state.quizzes.quizzes;
//9e. Export actior creators and reducer
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
