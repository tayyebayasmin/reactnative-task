
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
const MovieCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text1}>Movie {' '}</Text>
                <Text>{item?.title}</Text>

            </View>
            <View style={styles.row}>
                <Text style={styles.text1}>Release Year {' '}</Text>
                <Text>{item?.releaseYear}</Text>

            </View>

        </View>
    );
};

export default MovieCard;