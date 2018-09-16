"use strict";

import React, { Component } from "react";
import { Alert, View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class AddButtonMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handTitle: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.orAddMode && (
          <View>
            {/* textInput追加用 */}
            <View style={styles.base}>
              <Button
                title="コンポーネントを追加"
                onPress={() => this.props.addTextInput(this.state.handTitle)}
              />

              <Grid>
                <Col size={1}>
                  <Text style={styles.center}>タイトル</Text>
                </Col>
                <Col size={2}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Data Title"
                    onChangeText={text => this.setState({ handTitle: text })}
                  />
                </Col>
              </Grid>
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
    alignItems: "center"
  },
  base: {
    flexDirection: "column",
    width: 290,
    height: 75,
    borderRadius: 15,
    backgroundColor: "rgba(239, 239, 244, 0.95)",
    borderColor: "rgba(130, 130, 130, 0.95)",
    borderWidth: 1
  },
  center: {
    textAlign: "center"
  },
  textInput: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "white",
    textAlign: "center"
  }
});
