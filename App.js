/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import CodePush from 'react-native-code-push';
import Analytics from 'mobile-center-analytics';
import Crashes from 'mobile-center-crashes';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let codePushOptions = { 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
  codePush.sync({
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE
});



type Props = {};
class App extends Component<Props> {

  sendEvent() {
    Analytics.trackEvent('this is a sendEvent', {
      prop1: new Date().getSeconds()
    })
  }
  
  nativeCrash() {
    Crashes.generateTestCrash();
  }
  
  jsCrash() {
    this.func1();
  }
  
  func1() {
    throw new Error('my uncaught javascript error');
  }
  
  constructor(props) {
    super(props);
    this.state = {logs: []};
  }
  
  codepushSync() {
    this.setState({ logs: ['Started at ' + new Date().getTime()]})
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.installMode.IMMEDIATE
    }, (status) =>{
      if (status === CodePush.SyncStatus[key]) {
        this.setState(prevState => ({ logs: [...prevState.logs, key.replace(/_/g, ' ')] }));
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sunday was changed</Text>
        <Text style={styles.welcome}>{JSON.stringify(this.state.logs)}</Text>
        <Button 
          title='send events'
          onPress={() => {this.sendEvent()}}
        />
        <Button 
          title='Native crashe'
          onPress={() => {this.nativeCrash()}}
        />
        <Button 
          title='JS Crash'
          onPress={() => {this.jsCrash()}}
        />
        <Button 
         title='code push sinc'
         onPress={() => {this.codepushSync()}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default CodePush(codePushOptions)(App);
