import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useGetCocktails } from "@/hook/useGetCocktails";
import { useGetIngredients } from "@/hook/useGetIngredients";

export default function Home() {
  const cocktails = useGetCocktails();
  const ingredients = useGetIngredients();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bienvenue dans l'univers des Cocktails</Text>
      <Text style={styles.subheading}>Explorez des créations uniques</Text>

      <Text style={styles.sectionTitle}>Cocktails en Vedette</Text>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/cocktails/details/${item.idDrink}`)}
            style={styles.card}
          >
            <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
            <Text style={styles.cardTitle}>{item.strDrink}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Ingrédients Populaires</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.strIngredient1}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={[styles.card, styles.ingredientCard]}>
            <Text style={styles.ingredientText}>{item.strIngredient1}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fafafa",
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#3b5998",
    marginBottom: 10,
    fontFamily: "Helvetica",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    fontFamily: "Helvetica",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
    marginTop: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 120,
  },
  ingredientCard: {
    justifyContent: "center",
    paddingVertical: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
  ingredientText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#3b5998",
    textAlign: "center",
    fontStyle: "italic",
  },
});
