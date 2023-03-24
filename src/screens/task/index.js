
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, View, Text } from "react-native";
import MovieCard from "~components/MovieCard";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectIsMovies, selectTitle, setMovies } from "~store/slices/movies";

const Task = () => {
  const [Data, setData] = useState()
  const dispatch=useDispatch()
  const moviedata=useSelector(selectIsMovies)
  const title=useSelector(selectTitle)

  const fetchMovies = async () => {
    const response = await axios
      .get("https://reactnative.dev/movies.json")
      .catch((err) => {
        console.log("Err", err);
      });
    setData(response?.data);
    dispatch(setMovies(response?.data))
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <View style={styles.container}>
      <Text
        style={styles.heading}>
        {title}</Text>
      <FlatList
        data={moviedata}
        renderItem={(movie) => <MovieCard item={movie?.item} />}
      />
    </View>
  );
};

export default Task;