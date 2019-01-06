import { CREATE_DECK, ADD_CARD, GET_DECKS } from "../actions/index";

function decks(state = {}, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.deck]: { name: action.deck, questions: [] }
      };
    case ADD_CARD:
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

    default:
      return state;
  }
}

export default decks;
