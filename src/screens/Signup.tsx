import React, { useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../routes";
import colors from "../assets/colors";
import { Formik } from "formik";

type Props = NativeStackScreenProps<RootStackParamList>;

const Signup = ({ navigation }: Props) => {
  const [text, setText] = useState<string>("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/2.jpg")}
        resizeMode="stretch"
        style={styles.bgContainer}
      >
        <TouchableHighlight
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        >
          <Icon name="west" color={colors.textGray} size={15} />
        </TouchableHighlight>

        <Text style={[styles.baseText, { fontSize: 24, marginTop: 270 }]}>
          Add your details below to set up an account
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => console.log(value)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{ width: "100%" }}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={styles.textInput}
                placeholder="example@gmail.com"
                placeholderTextColor="#9E9E9E"
              />
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#9E9E9E"
                secureTextEntry={true}
              />
              <Pressable
                style={{ marginTop: 50, borderRadius: 20 }}
                onPress={handleSubmit}
              >
                <Button title="Create Account" color={colors.orange} />
              </Pressable>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    color: colors.textGray,
    textAlign: "center",
  },
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  container: {
    flex: 1,
  },
  goBack: {
    position: "absolute",
    top: StatusBar.currentHeight || 33,
    left: 30,
  },
  textInput: {
    height: 40,
    color: colors.textGray,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.textGray,
    paddingLeft: 20,
  },
});

export default Signup;
