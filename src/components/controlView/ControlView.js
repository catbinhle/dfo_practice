import React, { PureComponent } from 'react'
import {
    View, Text
} from 'react-native'
import styles from './styles'
import Button from '../buttonCommon/ButtonComon'
import {CONTROL_BUTTON_ENUM} from '../../modal/ToDoModal'
import colors from '../../configs/colors'
import * as Strings from '../../configs/strings'

export default class ControlView extends PureComponent {

    state = {
        activeBtn: 0
    }

    render() {
        const {filterString} = this.props
        const { activeBtn } = this.state
        return (
            <View style={styles.container}>
                <View style={[styles.controllButtons, 
                                {
                                    borderBottomWidth: 0.5,
                                    borderColor: colors.lightgrey
                                }]}>
                    <Text style={styles.label}>{filterString}</Text>
                    <Button 
                        title={Strings.ToggleAll}
                        titleColor={colors.white}
                        backgroundColor={colors.darkBlue}
                        width={'30%'}
                        height={40}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.TOGGLE)}
                    />
                </View>
                <View style={styles.controllButtons}>
                    <Button title={Strings.All} isBorder={true} titleColor={colors.black} 
                        width={'30%'}
                        height={40}
                        titleColor= {(activeBtn === CONTROL_BUTTON_ENUM.ALL || activeBtn === CONTROL_BUTTON_ENUM.TOGGLE) ? colors.white : colors.black}
                        backgroundColor={(activeBtn === CONTROL_BUTTON_ENUM.ALL || activeBtn === CONTROL_BUTTON_ENUM.TOGGLE) ? colors.green : colors.transparent}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.ALL)}
                    />
                    <Button title={Strings.Done} isBorder={true} titleColor={colors.black}
                        width={'30%'}
                        height={40}
                        titleColor= {activeBtn === CONTROL_BUTTON_ENUM.DONE ? colors.white : colors.black}
                        backgroundColor={activeBtn === CONTROL_BUTTON_ENUM.DONE ? colors.green : colors.transparent}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.DONE)}
                    />
                    <Button title={Strings.Active} isBorder={true} titleColor={colors.black}
                        width={'30%'}
                        height={40}
                        titleColor= {activeBtn === CONTROL_BUTTON_ENUM.ACTIVE ? colors.white : colors.black}
                        backgroundColor={activeBtn === CONTROL_BUTTON_ENUM.ACTIVE ? colors.green : colors.transparent}
                        event={() => this._onPress(CONTROL_BUTTON_ENUM.ACTIVE)}
                    />
                </View>
            </View>
        )
    }

    _onPress = (btn) => {
        this.props.event(btn)
        this.setState({
            activeBtn: btn
        })
    }
}