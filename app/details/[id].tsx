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
    backgroundColor: "#1b1b1d",
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#d4af37",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 15,
    textAlign: "center",
    color: "#d4af37",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontFamily: "Georgia",
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: "justify",
    color: "#e0e0e0",
    fontFamily: "Georgia",
  },
});
