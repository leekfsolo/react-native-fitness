import { Text } from "react-native";
import React, { FC } from "react";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

type Props = {
  children: string;
  style?: Object;
  fontStyle?: "normal" | "italic";
  fontWeight?: number;
};

const RobotoText: FC<Props> = (props: Props) => {
  const { fontWeight = 400, children, fontStyle = "normal", style } = props;

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  let fontFamily = "Roboto_400Regular";

  if (fontWeight === 100) {
    if (fontStyle === "italic") fontFamily = "Roboto_100Thin_Italic";
    else fontFamily = "Roboto_100Thin";
  } else if (fontWeight === 300) {
    if (fontStyle === "italic") fontFamily = "Roboto_300Light_Italic";
    else fontFamily = "Roboto_300Light";
  } else if (fontWeight === 400) {
    if (fontStyle === "italic") fontFamily = "Roboto_400Regular_Italic";
    else fontFamily = "Roboto_400Regular";
  } else if (fontWeight === 500) {
    if (fontStyle === "italic") fontFamily = "Roboto_500Medium_Italic";
    else fontFamily = "Roboto_500Medium";
  } else if (fontWeight === 700) {
    if (fontStyle === "italic") fontFamily = "Roboto_700Bold_Italic";
    else fontFamily = "Roboto_700Bold";
  } else {
    if (fontStyle === "italic") fontFamily = "Roboto_900Black_Italic";
    else fontFamily = "Roboto_900Black";
  }

  return fontsLoaded ? (
    <Text style={[{ fontFamily }, style]}>{children}</Text>
  ) : (
    <Text>{children}</Text>
  );
};

export default RobotoText;
