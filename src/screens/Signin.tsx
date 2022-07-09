import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../assets/colors";
import CButton from "../components/CButton";
import CInput from "../components/CInput";
import GoBack from "../components/GoBack";
import Heading from "../components/Heading";
import RobotoText from "../components/RobotoText/RobotoText";
import { RootStackParamList } from "../routes";
import { ACCOUNT } from "./reducer/enum";
import { SignupFormControl, SignupValue } from "./reducer/model";
import * as Yup from "yup";

const accountValue: Array<SignupValue> = [
  { label: ACCOUNT.EMAIL, placeholder: "example@gmail.com" },
  { label: ACCOUNT.PASSWORD, placeholder: "Enter your password" },
];
const SigninSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

type Props = NativeStackScreenProps<RootStackParamList>;

const Signin = ({ navigation }: Props) => {
  const validateAccount = (value: SignupFormControl) => {
    // Validate aacount

    navigation.push("EnterName");
  };

  return (
    <ImageBackground
      source={require("../assets/images/3.jpg")}
      resizeMode="cover"
      style={styles.bgContainer}
    >
      <GoBack navigation={navigation} offsetTop={10} />
      <Heading offsetTop={260} style={{ marginBottom: 35 }}>
        Welcome Back!
      </Heading>

      <Formik
        initialValues={{ email: "", password: "" }}
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
            {accountValue.map((elem, idx) => (
              <CInput
                elem={elem}
                key={idx}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched}
                values={values}
              />
            ))}
            <RobotoText
              style={{
                fontSize: 18,
                color: colors.textGray,
                textAlign: "center",
                marginTop: 100,
              }}
            >
              Have you forgotten your password?
            </RobotoText>
            <CButton
              fontSize={28}
              handleNavigate={handleSubmit}
              title="Login"
              style={{ marginTop: 15 }}
            />
          </View>
        )}
      </Formik>
    </ImageBackground>
  );
};

export default Signin;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
});
