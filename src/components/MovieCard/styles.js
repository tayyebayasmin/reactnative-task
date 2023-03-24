import { StyleSheet } from "react-native";
import { height, width } from "~utils";

const styles = StyleSheet.create({
    container: {
        marginHorizontal:width(3),
        backgroundColor: 'white',
        marginVertical: width(2),
        padding: width(3),
        borderRadius: width(2),
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.25,
        shadowRadius: 1.84, elevation: 5
    },
    row: {
        flexDirection: 'row'
    },
    text1: {
        fontWeight: 'bold'
    }
})
export default styles;