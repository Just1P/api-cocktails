import { Stack } from "expo-router";

export default function CocktailsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Liste des Cocktails",
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "Détails du Cocktail",
        }}
      />
    </Stack>
  );
}
