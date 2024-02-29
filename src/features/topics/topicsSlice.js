//5a. Import createSlice
import { createSlice } from "@reduxjs/toolkit";

//5b. Create a New Slice called topicsSlice
const topicsSlice = createSlice({
  name: "topics",
  initialState: { topics: {} }, //5c. Initial state consisting of an object that includes one property, topics, which corresponds to an empty object
  //5d. an addTopic action
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [],
      };
    },
  },
  extraReducers: {
    //10. Add an action that adds a quiz's id to the quizId array of the topic with which the newly created quiz is associated
    "quizzes/addQuiz": (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    },
  },
});

//5e. Create a selector that selects the topics object nested within initialState.
export const topicsSelector = (state) => state.topics.topics;
//5f. Export the selector as well as the action creators and reducer that your slice generates.
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
