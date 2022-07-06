import React from "react";

import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors";

type Props = {};

const WelcomeScreen = (props: Props) => {
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
          <View style={styles.buttonHome}>
            <Text style={[styles.baseText, { fontSize: 28 }]}>Get Started</Text>
          </View>
          <Text
            style={[styles.baseText, { color: colors.white, fontSize: 20 }]}
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

export default WelcomeScreen;
