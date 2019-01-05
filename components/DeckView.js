import React, { Component } from "react";
import { StyleSheet, View, Text, Button, ScrollView } from "react-native";
import { getInitialDecks } from "../utils/api";
import { connect } from "react-redux";
import { getDecks } from "../utils/api";
import { receiveDecks } from "../actions/index";
import { AppLoading, Constants } from "expo";
import { orange, white, purple, pink, black } from "../utils/colors";
import { getCardsLength } from "../utils/helpers";

// This component displays the list of Decks

class DeckView extends Component {
  state = {
    ready: false
  };

  // getDecks() returns a promise
  componentDidMount() {
    getDecks()
      .then(decks => this.props.receiveAllDecks(decks))
      .then(() => this.setState(() => ({ ready: true })));
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }
    // const decks = getInitialDecks();
    const { decks } = this.props;
    console.log("[DeckView] The props are ", this.props);
    console.log("[DeckView] The decks are ", decks);

    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map(deck => {
          const { name, questions } = decks[deck];
          return (
            <View key={deck} style={styles.card}>
              <Text style={styles.cardText}>{name}</Text>
              <Text style={styles.cardSubText}>
                {questions ? getCardsLength(questions) : null}
              </Text>
              <Button
                onPress={() =>
                  this.props.navigation.navigate("Deck", { entryId: deck })
                }
                title="View"
                style={styles.cardBtn}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    padding: 5,
    marginTop: Constants.statusBarHeight
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: black,
    margin: 8,
    height: 120,
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.34)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    padding: 16
  },
  cardText: {
    fontSize: 25,
    color: white,
    marginBottom: 8
  },
  cardSubText: {
    fontSize: 14,
    color: pink
  },
  cardBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return {
    receiveAllDecks: decks => dispatch(receiveDecks(decks))
  };
}

function mapStateToProps(decks) {
  return { decks };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
