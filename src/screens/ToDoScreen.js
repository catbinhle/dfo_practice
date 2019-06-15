import React, {Component} from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import * as Strings from '../configs/strings'
import * as ToDoModal from '../modal/ToDoModal'
import styles from './styles'
import ToDoList from '../components/ToDoList/ToDoList'
import TextBox from '../components/textBox/TextBox'
import ControllView from '../components/controlView/ControlView'

export default class ToDoScreen extends Component {

  state = {
    id: 0,
    toDoList: [],
    filterToDoList: [],
    filterNum: 0
  }
  
  render() {
    const {filterToDoList} = this.state
    const currentToDoList = filterToDoList

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textLabel}>{Strings.TitleTextBox}</Text>
        </View>
        <TextBox 
          placeholder={Strings.PlaceholderTextBox}
          event={(text) => this._addToDoList(text)}/>
        <ToDoList 
          data={currentToDoList}
          onCheckBox={(checked, id) => this._onCheckBox(checked, id)}
          onRemove={(id) => this._removeItemData(id)}
        />
        <ControllView 
          filterString={Strings.Filter}
          event={(btn) => this._onFilter(btn)}
        />
      </SafeAreaView>
    )
  }

  //ACTION
  _addToDoList = (text) => {
    if (text.length > 0) {
      this.setState({ 
        toDoList: [...this.state.toDoList, ToDoModal.toDoModal(text, false, this.state.id)],
        id: this.state.id + 1
      }, () => this._filterData(this.state.filterNum))
    }
  }

  _onCheckBox = (checked, id) => {

    const newTodoList = this.state.toDoList.map(item => {
      if (item.id === id) {
        item.active = checked
      }
      return item
    })
    this.setState({ toDoList: newTodoList }, () => this._filterData(this.state.filterNum))
    
  }

  _removeItemData = (id) => {
    const newTodoList = this.state.toDoList.filter(item => {
      return (item.id != id)
    })
    this.setState({toDoList: newTodoList}, () => this._filterData(this.state.filterNum))
  }

  _onFilter = (btn) => {
    if (btn === ToDoModal.CONTROL_BUTTON_ENUM.TOGGLE) {
      var newTodoList = this.state.toDoList.map(item => {
        item.active = !item.active
        return item
      })
      this.setState({ toDoList: newTodoList }, () => this._filterData(this.state.filterNum))
    } else {
      this.setState({filterNum: btn}, () => this._filterData(this.state.filterNum))
    }
  }

  _filterData = (filterNum) => {
    var filterData = []
    switch (filterNum) {
      case ToDoModal.CONTROL_BUTTON_ENUM.ALL:
        filterData = this.state.toDoList
        break
      case ToDoModal.CONTROL_BUTTON_ENUM.DONE: 
        filterData = this.state.toDoList.filter(item => {
            return (item.active === true)
        })
        break
      case ToDoModal.CONTROL_BUTTON_ENUM.ACTIVE:
        filterData = this.state.toDoList.filter(item => {
            return (item.active === false)
        })
        break
    }

    this.setState({
      filterToDoList: filterData
    })

  }
}