import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { connect } from "react-redux";
import MainButton from "./MainButton";
import { white, red, blue, black, pink } from "../utils/colors";
import { formatCardLengthTitle } from "../utils/helpers";

class Deck extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  };

  componentDidMount() {
    const { opacity, height } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
    Animated.spring(height, { toValue: 30, speed: 5 }).start();
  }

  render() {
    const deck = this.props.navigation.state.params.entryId;
    const { decks } = this.props;
    const questions = decks[deck].questions;

    const { opacity, height } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Animated.Text style={[styles.mainText, { opacity, height }]}>
            {decks[deck].name}
          </Animated.Text>
          <Text style={styles.subText}>
            {questions ? formatCardLengthTitle(questions) : null}
          </Text>
          <MainButton
            styles={styles}
            color={blue}
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
    borderRadius: 30,
    height: 45,
    margin: 5,
    width: 200
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  card: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: black,
    alignSelf: "stretch",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.34)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 30,
    color: white,
    marginBottom: 8
  },
  subText: {
    fontSize: 15,
    color: pink,
    marginBottom: 40
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Deck);
