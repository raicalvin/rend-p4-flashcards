/* TODO List

    - Create initial data object for decks inside API
    - Implement the API functions to store and export the data
    - Import the decks into the DeckView
    - Make the navigation components for adding deck, viewing decklist, and about section
    - Style these initial components
    - Hook up Redux so that we can add and delete decks
    - AsyncStorage so that we can get initial decks or the decks that the user created
*/

import { AsyncStorage } from "react-native";

// Key used to get the same data from the phone every time the app runs
// This is just where we will persist this information
const FLASHCARDS_KEY = "flashcards: decks";

// Use this to clear all AsyncStorage data when needed (just uncomment and refresh app)
// AsyncStorage.clear();

const initialDecks = {
  Physics: {
    name: "Physics",
    questions: [
      {
        question: "What is density?",
        answer: "The measurement of mass divided by volume."
      },
      {
        question: "What is volume?",
        answer: "The amount of space a liquid takes up."
      },
      {
        question: "What is a Black hole?",
        answer:
          "A region of space having a gravitational force so strong that not even light can escape."
      }
    ]
  },
  Chemistry: {
    name: "Chemistry",
    questions: [
      {
        question: "What is Hydrogen?",
        answer:
          "A colorless and odorless gas that is highly flammable with an atomic number of 1."
      },
      {
        question: "What atomic number is Oxygen?",
        answer: "The atomic number is 8."
      }
    ]
  },
  History: {
    name: "History",
    questions: [
      {
        question: "When was the American Revolutionary War?",
        answer: "The war lasted from April 1775 to September 1783."
      }
    ]
  },
  HarryPotter: {
    name: "Harry Potter",
    questions: [
      {
        question: "What are the three Deathly Hallows?",
        answer:
          "The Invisibility Cloak, The Elder Wand, and The Resurrection Stone."
      },
      {
        question: "What was protected in Vault 713?",
        answer: "The Philosopher's Stone."
      },
      {
        question: "Who gave Harry the Firebolt after his Nimbus 2000 broke?",
        answer: "Sirius Black"
      },
      {
        question:
          "Why did Harry bring the Golden Egg into the Prefects Bathroom?",
        answer: "Cedric hinted to Harry that he should."
      },
      {
        question: "Who was the Half-Blood Prince?",
        answer: "Severus Snape"
      }
    ]
  }
};

// getData() in tut
export const getInitialDecks = () => {
  return initialDecks;
};

export function getDecks(decks) {
  return AsyncStorage.getItem(FLASHCARDS_KEY).then(result => {
    if (result) {
      // If there is a result, return it
      return JSON.parse(result);
    } else {
      // If there isn't a result, set the intial decks as storage and then return it
      AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(initialDecks));
      return initialDecks;
    }
  });
}

export function saveDeckTitle(name) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_KEY,
    JSON.stringify({
      [name]: {
        name: name,
        questions: []
      }
    })
  );
}

export function addCardToDeck(name, card) {
  return AsyncStorage.getItem(FLASHCARDS_KEY)
    .then(results => JSON.parse(results))
    .then(results => {
      results[name].questions.push(card);
      AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify(results));
      return results;
    });
}
