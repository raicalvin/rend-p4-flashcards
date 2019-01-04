import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class MainButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          this.props.styles.iosBtn,
          { backgroundColor: this.props.color }
        ]}
      >
        <Text style={style.submitBtnText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default MainButton;
