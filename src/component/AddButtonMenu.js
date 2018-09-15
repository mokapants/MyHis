"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class AddButtonMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.orAddMode && (
          <View style={styles.container}>
            <View style={styles.base}>
              <Button title="データの追加" onPress={() => null} />
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  base: {
    flex: 1,
    flexDirection: "column",
    width: 290,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderColor: "rgba(130, 130, 130, 0.9)",
    borderWidth: 1
  }
});
