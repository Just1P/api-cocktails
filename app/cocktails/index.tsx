import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useGetAllCocktails } from "@/hook/useGetAllCocktails";

export default function Cocktails() {
  const router = useRouter();
  const { cocktails } = useGetAllCocktails();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Cocktails</Text>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/cocktails/details/${item.idDrink}`)}
          >
            <View style={styles.card}>
              <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.image}
              />
              <Text style={styles.text}>{item.strDrink}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1b1b1d",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#d4af37",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontFamily: "Georgia",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 12,
    backgroundColor: "#2b2b2e",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#d4af37",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#d4af37",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    fontFamily: "Georgia",
  },
});
