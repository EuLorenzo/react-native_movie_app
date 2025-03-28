import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

//Este componente recebe como parametro um [id]
//A url ficaria: movies/id

const MovieDetails = () => {
  //Com o useLocalSearchParams, conseguimos acessar fácil o parametro que vem na url
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>MovieDetails: {id}</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
