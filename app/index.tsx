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
    backgroundColor: "#1c1c1e", // Fond sombre pour un look élégant
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#d4af37", // Doré pour un style luxueux
    marginBottom: 10,
    fontFamily: "Georgia", // Police élégante
    textTransform: "uppercase", // Majuscules pour un effet distingué
    letterSpacing: 2, // Espacement des lettres pour renforcer le style
  },
  subheading: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "#b0b0b0", // Gris clair pour contraster avec le fond sombre
    marginBottom: 20,
    fontFamily: "Georgia",
    fontStyle: "italic", // Accentue l'élégance
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffffff", // Blanc pur pour une lisibilité optimale
    marginBottom: 15,
    marginTop: 10,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#2b2b2e",
    borderRadius: 12,
    marginHorizontal: 10,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#d4af37",
    minWidth: 130,
    height: 150,
  },
  ingredientCard: {
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#2b2b2e",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a67c00",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#d4af37",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Georgia",
  },
  ingredientText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#d4af37",
    textAlign: "center",
    fontStyle: "italic",
  },
});
