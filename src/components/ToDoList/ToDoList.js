import React, { PureComponent } from 'react'
import {
    FlatList
} from 'react-native'
import ToDoCell from '../ToDoCell/ToDoCell'

export default class ToDoList extends PureComponent {

    render() {
        const { data } = this.props
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
            />
        )
    }

    _renderItem = ({item}) => (
        <ToDoCell 
            item={item}
            onCheckBox={(checked) => this._pressCheckbox(checked, item.id)}
            onRemove={() => this._onRemove(item.id)}
        />
    )

    _pressCheckbox = (checked, id) => {
        this.props.onCheckBox(checked, id)
    }

    _onRemove = (id) => {
        this.props.onRemove(id)
    }
}