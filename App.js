/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import ToDoNavigator from './src/navigation/ToDoNavigator'
console.disableYellowBox = true

export default class App extends Component {
  render() {
    return (
      <ToDoNavigator />
    )
  }
}
