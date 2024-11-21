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
  const { cocktails, isLoading, error } = useGetAllCocktails();

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
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
