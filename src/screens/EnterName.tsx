import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import GoBack from "../components/GoBack";
import Heading from "../components/Heading";
import { Formik } from "formik";
import * as Yup from "yup";
import CInput from "../components/CInput";
import CButton from "../components/CButton";
import { SignupFormControl } from "./reducer/model";
import { ACCOUNT } from "./reducer/enum";
import colors from "../assets/colors";

const SigninSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

type Props = NativeStackScreenProps<RootStackParamList>;

const EnterName = ({ navigation }: Props) => {
  const validateAccount = (value: { name: string }) => {
    // Validate aacount
    console.log("testts");
    navigation.push("EnterDate");
  };

  return (
    <ImageBackground
      source={require("../assets/images/3.jpg")}
      resizeMode="cover"
      style={styles.bgContainer}
    >
      <GoBack navigation={navigation} offsetTop={10} />
      <Heading offsetTop={260} style={{ marginBottom: 35 }}>
        It’s great that you’re here! First things first, what should we call
        you?
      </Heading>

      <Formik
        initialValues={{ name: "" }}
        onSubmit={(value) => validateAccount(value)}
        validationSchema={SigninSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ width: "100%" }}>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              style={styles.textInput}
              placeholder="Your name"
              placeholderTextColor="#9E9E9E"
              underlineColorAndroid="transparent"
            />
            <CButton
              fontSize={28}
              handleNavigate={handleSubmit}
              title="Login"
              style={{ marginTop: 150 }}
            />
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default EnterName;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  textInput: {
    height: 40,
    color: colors.textGray,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.textGray,
    paddingHorizontal: 27,
    textAlign: "center",
  },
});
