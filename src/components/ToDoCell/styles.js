import { StyleSheet } from "react-native"
import colors from '../../configs/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 50,
        margin: 4,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: colors.lightgrey,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkBoxContent: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContent: {
        width: '70%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 8
    },
    removeBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        color: colors.black,
        textAlign: 'left',
        fontWeight: '400'
    }
})

export default styles