import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { orange, white, purple, red, green } from "../utils/colors";
import SubmitButton from "./SubmitButton";
import { connect } from "react-redux";
import MainButton from "./MainButton";
import QuizInfo from "./QuizInfo";

class Quiz extends Component {
  state = {
    questionNumber: 0
  };

  render() {
    const decks = this.props.decks;
    const currentDeck = this.props.navigation.state.params.entryId;
    const questionNumber = this.state.questionNumber;
    const number = this.state.questionNumber + 1;
    return (
      <View style={styles.container}>
        <Text>
          {number} / {decks[currentDeck].questions.length}
        </Text>

        <Text>{decks[currentDeck].questions[questionNumber].question}</Text>
        <QuizInfo text="Show Answer" />
        <MainButton styles={styles} text="Correct" />
        <MainButton styles={styles} text="Incorrect" />
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
    width: 160
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
