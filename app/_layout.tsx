import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        {/* Desativa o header que mostra (tabs) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Desativa o header que mostra movie/[id] */}
        <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
