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
import { RootStackParamList } from "../routes";

type Props = NativeStackScreenProps<RootStackParamList>;

const Welcome = ({ navigation }: Props) => {
  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.push(screen);
  };

  return (
    <View style={styles.container}>
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
          <Text style={[styles.baseText, { fontSize: 24 }]}>
            Make yourself stronger than your excuses
          </Text>
        </View>
        <View style={styles.footerHome}>
          <CButton
            fontSize={28}
            handleNavigate={() => handleNavigate("Signup")}
            title="Get Started"
          />
          <Text
            style={[styles.baseText, { color: colors.white, fontSize: 20 }]}
            onPress={() => handleNavigate("Signin")}
          >
            Or Login
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    color: colors.textGray,
    textAlign: "center",
    fontWeight: "400",
  },
  bgContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40,
  },
  buttonHome: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: colors.orange,
    borderRadius: 10,
    marginBottom: 18,
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
