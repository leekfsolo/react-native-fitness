import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import GoBack from "../components/GoBack";
import Heading from "../components/Heading";
import { Formik } from "formik";
import * as Yup from "yup";
import CButton from "../components/CButton";
import colors from "../assets/colors";
import CImageBackground from "../components/CImageBackground";

const SigninSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

type Props = NativeStackScreenProps<RootStackParamList>;

const EnterName = ({ navigation }: Props) => {
  const imgBg = require("../assets/images/4.jpg");
  const validateAccount = (value: { name: string }) => {
    // Validate aacount
    navigation.push("EnterDate");
  };

  return (
    <CImageBackground source={imgBg}>
      <GoBack navigation={navigation} offsetTop={10} />
      <Heading offsetTop={400} style={{ marginBottom: 35 }}>
        It’s great that you’re here! First things first, what should we call
        you?
      </Heading>

      <Formik
        initialValues={{ name: "" }}
        onSubmit={(value) => validateAccount(value)}
        validationSchema={SigninSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
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
              title="Continue"
              style={{ marginTop: 50 }}
            />
          </View>
        )}
      </Formik>
    </CImageBackground>
  );
};

export default EnterName;

const styles = StyleSheet.create({
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
