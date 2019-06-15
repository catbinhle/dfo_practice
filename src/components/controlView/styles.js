import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 8,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    controllButtons: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    label: {
        margin: 4,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default styles