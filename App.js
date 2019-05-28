import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import reducer from './redux/reducers'
import middleware from './redux/middleware'
import CityList from './components/CityList'
import AppNavigator from './components/AppNavigator'

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, middleware)
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}