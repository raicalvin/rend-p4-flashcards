import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import { white, red, green, blue, black, lightPurple } from "../utils/colors";
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

  goHome = () => {
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
              <Text style={{ fontSize: 50, margin: 12 }}>🤓</Text>
            ) : (
              <Text style={{ fontSize: 50, margin: 12 }}>😭</Text>
            )}

            <MainButton
              styles={styles}
              text="Restart"
              color={red}
              onPress={this.restart}
            />
            <MainButton
              styles={styles}
              text="Home"
              color={green}
              onPress={this.goHome}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>
            Question {number} of {decks[currentDeck].questions.length}
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
  questions: {
    color: lightPurple,
    marginBottom: 10
  },
  answer: {
    color: blue,
    fontSize: 18,
    margin: 20
  },
  card: {
    height: 500,
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
    shadowOpacity: 1,
    margin: 10
  },
  mainText: {
    fontSize: 25,
    color: white,
    marginTop: 0,
    textAlign: "center"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
