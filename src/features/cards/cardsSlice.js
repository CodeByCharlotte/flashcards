//14a. Create a slice called cardsSlice
import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: { cards: {} }, //14b. Initial state consisting of an object that includes one property, cards
  reducers: {
    //14c. Create an addCard action
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    },
  },
});

//14d. Selector that returns a card with the given id
export const cardsSelector = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
