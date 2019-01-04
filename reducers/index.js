import {
  CREATE_DECK,
  ADD_CARD,
  GET_DECKS,
  DELETE_CARD,
  DELETE_DECK
} from "../actions/index";

function deck(state = {}, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.deckId]: action.deck
      };
    case ADD_CARD:
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

export default deck;
