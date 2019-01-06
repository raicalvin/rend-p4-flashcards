// ACTIONS

export const CREATE_DECK = "CREATE_DECK"; // Create a new deck
export const ADD_CARD = "ADD_CARD"; // Add a new question card
export const GET_DECKS = "GET_DECKS"; // Get all the decks to view on screen

// ACTION CREATORS

export function receiveDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function addDeck(deck) {
  return {
    type: CREATE_DECK,
    deck
  };
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  };
}
