import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";
import MainButton from "./MainButton";
import { white, red, purple, orange } from "../utils/colors";

class Deck extends Component {
  render() {
    const deck = this.props.navigation.state.params.entryId;
    const { decks } = this.props;
    console.log("[Deck] The open Deck is: ", deck);
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.mainText}>{decks[deck].name}</Text>
          <Text style={styles.subText}>{decks[deck].questions.length}</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: white,
    padding: 20
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
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "orange",
    alignSelf: "stretch",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.34)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 40,
    color: white
  },
  subText: {
    fontSize: 30,
    color: white,
    marginBottom: 160
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Deck);
