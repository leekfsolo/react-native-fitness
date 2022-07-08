import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../assets/colors";
import GoBack from "../components/GoBack";
import { RootStackParamList } from "../routes";

type Props = NativeStackScreenProps<RootStackParamList>;

const Signin = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/3.jpg")}
        resizeMode="cover"
        style={styles.bgContainer}
      >
        <GoBack navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

export default Signin;

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
