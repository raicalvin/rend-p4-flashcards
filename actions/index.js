/* 
    1. Getting all the decks from the store/storage
    2. Creatnig a new deck
    3. Creating a new card
    4. Deleting a card
    5. Deleting a deck
*/

// ACTIONS

export const CREATE_DECK = "CREATE_DECK"; // Create a new deck
export const ADD_CARD = "ADD_CARD"; // Add a new question card
export const GET_DECKS = "GET_DECKS"; // Get all the decks to view on screen
// export const DELETE_CARD = "DELETE_CARD"; // Delete a question card
// export const DELETE_DECK = "DELETE_DECK"; // Delete a specific deck

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

// export function deleteDeck(deck) {
//   return {
//     type: DELETE_DECK,
//     deck
//   };
// }

// export function deleteCard(card) {
//   return {
//     type: DELETE_DECK,
//     card
//   };
// }
