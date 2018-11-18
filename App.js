import React, { Component } from 'react';
import { View, Text } from 'react-native';
import codePush from "react-native-code-push";

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default codePush(codePushOptions)(ComponentName);
