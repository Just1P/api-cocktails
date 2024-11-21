import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
