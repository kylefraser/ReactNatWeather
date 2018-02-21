/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components';
import Weather from './components/Weather'
import { Font } from 'expo';
import { LinearGradient } from 'expo';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-family: "Montserrat-Regular";
  font-size: 48px;
  text-align: center;
  color: #fff;
`;

type Props = {
  
};

export default class App extends Component<Props> { 
  state={
    isReady: false
  }

  componentWillMount() {
    this._loadFontsAsync();
  }

  _loadFontsAsync = async () => {
    await Expo.Font.loadAsync({'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')});
    this.setState({isReady: true});
  }
  render() {
      if (!this.state.isReady) {
        return <Expo.AppLoading />;
      }
      return (
        <Container>
          <LinearGradient colors={['#ff9e02', '#ff2e00']} start={[0, 0]} end={[1, 1]} style={styles.linearGradient}>
            <Title>
              {'Beacon'.toUpperCase()}
            </Title>
            <Weather />            
          </LinearGradient>
        </Container>        
      );
    }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center'    
  },
});

