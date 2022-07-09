import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../assets/colors";
import CButton from "../components/CButton/CButton";
import Heading from "../components/Heading";
import RobotoText from "../components/RobotoText/RobotoText";
import { RootStackParamList } from "../routes";

type Props = NativeStackScreenProps<RootStackParamList>;

const Welcome = ({ navigation }: Props) => {
  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.push(screen);
  };

  return (
    <ImageBackground
      source={require("../assets/images/1.jpg")}
      resizeMode="cover"
      style={styles.bgContainer}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <Heading>Make yourself stronger than your excuses</Heading>
      </View>
      <View style={styles.footerHome}>
        <CButton
          fontSize={28}
          handleNavigate={() => handleNavigate("Signup")}
          title="Get Started"
        />
        <TouchableOpacity onPress={() => handleNavigate("Signin")}>
          <RobotoText style={{ color: colors.white, fontSize: 20 }}>
            Or Login
          </RobotoText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  container: {
    flex: 1,
  },
  footerHome: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: "center",
  },
});

export default Welcome;
