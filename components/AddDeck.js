import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { connect } from "react-redux";
import SubmitButton from "./SubmitButton";
import { orange } from "../utils/colors";

class AddDeck extends Component {
  // Keep track of the input name for the deck
  state = {
    deckText: ""
  };

  // Dispatch an action to add the new Deck Name to the state
  submitDeckName = () => {
    const { deckText } = this.state;
    this.props.dispatch(addDeck(deckText));
    this.setState({ deckText: "" });
    this.props.navigation.navigate("Deck", { entryId: deckText });
    saveDeckTitle(deckText);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the new Decks name?</Text>
        <TextInput
          onChangeText={text => this.setState({ deckText: text })}
          value={this.state.deckText}
          style={styles.input}
        />
        <SubmitButton style={styles.submitBtn} onPress={this.submitDeckName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 50,
    borderRadius: 8
  },
  title: {
    fontSize: 30,
    color: "#333",
    textAlign: "center"
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: "#6d67da",
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: "hidden"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(AddDeck);
