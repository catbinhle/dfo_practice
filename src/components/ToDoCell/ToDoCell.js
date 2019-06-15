import React, { PureComponent } from 'react'
import {
    Text, View, Image
} from 'react-native'
import styles from './styles'
import { CheckBox } from 'react-native-elements'
import RemoveBotton from '../buttonCommon/ButtonComon'
import images from '../../configs/images'
import colors from '../../configs/colors'

export default class ToDoCell extends PureComponent {

    render() {
        const { item, onRemove } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.checkBoxContent}>
                    <CheckBox
                        center
                        checkedIcon={<Image source={images.checkbox.checked} />}
                        uncheckedIcon={<Image source={images.checkbox.unchecked} />}
                        checked={item.active}
                        onPress={() => this._onCheckbox()}
                        size={32}
                    />
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.label}>{item.name}</Text>
                </View>
                <View style={styles.removeBtn}>
                    <RemoveBotton 
                        title={'X'}
                        fontWeight={'900'}
                        event={onRemove}
                        backgroundColor={colors.red}
                        width={40}
                        height={40}
                        titleColor={colors.white}
                    />
                </View>
            </View>
        )
    }

    _onCheckbox = () => {
        const { item } = this.props
        this.props.onCheckBox(!item.active)
    }
}