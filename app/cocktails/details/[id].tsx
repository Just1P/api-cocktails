import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useGethCocktailById } from "@/hook/useGetCocktailsById";

export default function CocktailDetails() {
  const { id } = useLocalSearchParams();
  const { cocktail, isLoading, error } = useGethCocktailById(id);

  if (!cocktail) return <Text>Chargement...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={styles.image} />
      <Text style={styles.title}>{cocktail.strDrink}</Text>
      <Text style={styles.text}>{cocktail.strInstructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
  },
});
