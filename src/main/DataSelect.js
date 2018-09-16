"use strict";

import React, { Component } from "react";
import { View, Button } from "react-native";

export default class DataSelect extends Component {
  static navigationOptions = {
    title: "DataSelect"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="データの追加" onPress={() => navigate("AddData")} />
      </View>
    );
  }
}
