import React, { PureComponent } from 'react'
import {
    View, TextInput
} from 'react-native'
import styles from './styles'
import colors from '../../configs/colors'

export default class TextBox extends PureComponent {

    state = {
		text: ''
    }
    
    render() {
        const { placeholder } = this.props
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder={placeholder}
                    placeholderTextColor={colors.grey}
                    returnKeyType='done'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    onEndEditing={(e) => this._onEndEditting(e)}
                />             
            </View>
        )
    }

    _onEndEditting = (e) => {
        this.props.event(e.nativeEvent.text)
        this.setState({
            text: ''
        })
    }
}