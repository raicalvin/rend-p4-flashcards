import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";
import MainButton from "./MainButton";
import { white, red, purple } from "../utils/colors";

class Deck extends Component {
  render() {
    const deck = this.props.navigation.state.params.entryId;
    const { decks } = this.props;
    console.log("[Deck] The open Deck is: ", deck);
    return (
      <View style={styles.container}>
        <Text>{decks[deck].name}</Text>
        <Text>{decks[deck].questions.length}</Text>
        <MainButton
          styles={styles}
          color={purple}
          text={"Add Card"}
          onPress={() =>
            this.props.navigation.navigate("AddCard", { entryId: deck })
          }
        />
        <MainButton
          styles={styles}
          color={red}
          text={"Start Quiz"}
          onPress={() =>
            this.props.navigation.navigate("Quiz", { entryId: deck })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 170
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Deck);
