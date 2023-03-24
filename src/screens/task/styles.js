import { StyleSheet } from "react-native";
import { height, width } from "~utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: height(5),
        paddingHorizontal: width(7),
    },
    heading: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: width(5),
        fontSize: width(4)
    }
})
export default styles;