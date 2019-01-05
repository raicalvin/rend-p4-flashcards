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
    questionNumber: 0,
    showQuestion: false,
    correctAnswers: 0,
    incorrectAnswer: 0
  };

  showAnswer = () =>
    !this.state.showQuestion
      ? this.setState({ showQuestion: true })
      : this.setState({ showQuestion: false });

  submitAnswer = answer => {
    // check if answer is correct
    const { questionNumber } = this.state;
    const deck = this.props.navigation.state.params.entryId;
    const decks = this.props.decks;
    // const correct = decks[deck].questions[questionNumber].answer;

    // increment questionNumber

    // show animation
  };

  markCorrect = () => {
    this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    this.incrementQuestionNumber();
  };

  markIncorrect = () => {
    this.setState({ incorrectAnswer: this.state.incorrectAnswer + 1 });
    this.incrementQuestionNumber();
  };

  incrementQuestionNumber = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      showQuestion: false
    });
  };

  restart = () => {
    this.setState({
      questionNumber: 0,
      showQuestion: false,
      correctAnswers: 0,
      incorrectAnswer: 0
    });
  };

  home = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));
  };

  render() {
    const decks = this.props.decks;
    const currentDeck = this.props.navigation.state.params.entryId;
    const questionNumber = this.state.questionNumber;
    const number = this.state.questionNumber + 1;

    if (questionNumber === decks[currentDeck].questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.mainText}>
              You got {this.state.correctAnswers} out of{" "}
              {decks[currentDeck].questions.length} correct!
            </Text>
            {this.state.correctAnswers > this.state.incorrectAnswer ? (
              <Text style={{ fontSize: 90 }}>:]</Text>
            ) : (
              <Text style={{ fontSize: 90 }}>:[</Text>
            )}

            <MainButton
              styles={styles}
              text="Try Again"
              color={red}
              onPress={this.restart}
            />
            <MainButton
              styles={styles}
              text="Go Back"
              color={green}
              onPress={this.home}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>
            {number} / {decks[currentDeck].questions.length}
          </Text>

          {!this.state.showQuestion ? (
            <Text style={styles.mainText}>
              {decks[currentDeck].questions[questionNumber].question}
            </Text>
          ) : (
            <Text style={styles.mainText}>
              {decks[currentDeck].questions[questionNumber].answer}
            </Text>
          )}

          {!this.state.showQuestion ? (
            <QuizInfo
              style={styles.answer}
              text="Show Answer"
              onPress={this.showAnswer}
            />
          ) : (
            <QuizInfo
              style={styles.answer}
              text="Show Question"
              onPress={this.showAnswer}
            />
          )}

          <MainButton
            color={green}
            styles={styles}
            text="Correct"
            onPress={this.markCorrect}
          />
          <MainButton
            color={red}
            styles={styles}
            text="Incorrect"
            onPress={this.markIncorrect}
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
    alignItems: "center"
  },
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 160
  },
  submitBtnText: {
    color: white,
    fontSize: 26,
    textAlign: "center"
  },
  questions: {
    top: 0,
    alignSelf: "flex-start",
    left: 0,
    color: white,
    fontSize: 20,
    margin: 5,
    position: "absolute"
  },
  answer: {
    color: white,
    fontSize: 20,
    margin: 20
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
      height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 40,
    color: white,
    marginTop: 40,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
