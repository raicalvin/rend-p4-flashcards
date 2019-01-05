import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { saveDeckTitle } from "../utils/api";
import { addDeck } from "../actions";
import { connect } from "react-redux";
import SubmitButton from "./SubmitButton";
import { orange, blue, white, black } from "../utils/colors";

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
        <Text style={styles.title}>Enter a Deck name:</Text>
        <TextInput
          onChangeText={text => this.setState({ deckText: text })}
          value={this.state.deckText}
          style={styles.input}
        />
        <SubmitButton
          style={styles.submitButton}
          onPress={this.submitDeckName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    margin: 25,
    borderRadius: 30
  },
  title: {
    fontSize: 25,
    color: black,
    textAlign: "center"
  },
  submitButton: {
    padding: 10,
    backgroundColor: blue,
    borderRadius: 22.5,
    overflow: "hidden",
    height: 45,
    width: 200,
    textAlign: "center",
    fontSize: 22,
    color: white
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(AddDeck);
