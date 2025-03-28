import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Desativa o header que mostra (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Desativa o header que mostra movie/[id] */}
      <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
