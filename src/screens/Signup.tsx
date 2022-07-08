import React, { useReducer, useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { RootStackParamList } from "../routes";
import colors from "../assets/colors";
import { Formik } from "formik";
import CButton from "../components/CButton";
import CCheckBox from "../components/CCheckBox";
import { checkboxReducer } from "./reducer";
import { initCheckbox, SignupValue } from "./reducer/model";
import { checkboxActionType, SIGNUP } from "./reducer/enum";
import RobotoText from "../components/RobotoText/RobotoText";
import * as Yup from "yup";
import CInput from "../components/CInput";

type Props = NativeStackScreenProps<RootStackParamList>;

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const signupElements: Array<SignupValue> = [
  { label: SIGNUP.EMAIL, placeholder: "example@gmail.com" },
  { label: SIGNUP.PASSWORD, placeholder: "Enter your password" },
];

const Signup = ({ navigation }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [checkboxValue, setCheckboxValue] = useReducer(
    checkboxReducer,
    initCheckbox
  );
  const isFormValid = checkboxValue.privacy && checkboxValue.terms;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/2.jpg")}
        resizeMode="cover"
        style={styles.bgContainer}
      >
        <TouchableHighlight
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        >
          <Icon name="west" color={colors.textGray} size={15} />
        </TouchableHighlight>

        <RobotoText style={styles.textHeading}>
          Add your details below to set up an account
        </RobotoText>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(value) => console.log(value)}
          validationSchema={SignupSchema}
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
              {signupElements.map((elem, idx) => (
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
              <CCheckBox
                label="I’ve read the privacy policy"
                isSelected={checkboxValue.privacy}
                setSelection={() =>
                  setCheckboxValue({ type: checkboxActionType.PRIVACY })
                }
              />
              <CCheckBox
                label="I accept the terms & conditions"
                isSelected={checkboxValue.terms}
                setSelection={() =>
                  setCheckboxValue({ type: checkboxActionType.TERMS })
                }
              />
              <CButton
                fontSize={28}
                handleNavigate={handleSubmit}
                title="Create Account"
                style={{ marginTop: 40 }}
                disabled={!isFormValid}
              />
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  container: {
    flex: 1,
  },
  formControl: {
    marginBottom: 25,
    width: "100%",
    position: "relative",
  },
  goBack: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 35,
    left: 20,
  },
  textHeading: {
    fontSize: 24,
    marginTop: StatusBar.currentHeight ? 240 + StatusBar.currentHeight : 240,
    marginBottom: 35,
    textAlign: "center",
    color: colors.textGray,
  },
});

export default Signup;
