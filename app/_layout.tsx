import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

import "../global.css";


export default function RootLayout() {
  const [loaded] = useFonts({
    Lora: require('../assets/fonts/Lora-Variable.ttf'),
  });
  return <Stack />;
}
