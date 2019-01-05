import {
  CREATE_DECK,
  ADD_CARD,
  GET_DECKS,
  DELETE_CARD,
  DELETE_DECK
} from "../actions/index";

function decks(state = {}, action) {
  switch (action.type) {
    case CREATE_DECK:
      console.log("[reducers/index.js] The state is:", state);
      console.log("[reducers/index.js] The action is:", action);
      return {
        ...state,
        [action.deck]: { name: action.deck, questions: [] }
      };
    case ADD_CARD:
      console.log(
        "[reducers/index.js] The state is for adding a card: ",
        state
      );
      console.log("The action is ", action);
      return {
        ...state,
        [action.card.deck]: {
          name: action.card.deck,
          questions: state[action.card.deck].questions.concat({
            question: action.card.question,
            answer: action.card.answer
          })
        }
      };
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case DELETE_CARD:
    case DELETE_DECK:
    default:
      return state;
  }
}

export default decks;
