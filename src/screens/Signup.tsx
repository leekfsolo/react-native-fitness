import React, { useReducer, useState } from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { RootStackParamList } from "../routes";
import colors from "../assets/colors";
import { Formik } from "formik";
import CButton from "../components/CButton";
import CCheckBox from "../components/CCheckBox";
import { checkboxReducer } from "./reducer";
import { initCheckbox } from "./reducer/model";
import { checkboxActionType } from "./reducer/enum";
import RobotoText from "../components/RobotoText/RobotoText";
import * as Yup from "yup";

type Props = NativeStackScreenProps<RootStackParamList>;

enum signup {
  EMAIL = "email",
  PASSWORD = "password",
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const signupElements: Array<{ label: signup; placeholder: string }> = [
  { label: signup.EMAIL, placeholder: "example@gmail.com" },
  { label: signup.PASSWORD, placeholder: "Enter your password" },
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
                <View style={styles.formControl} key={idx}>
                  <TextInput
                    onChangeText={handleChange(elem.label)}
                    onBlur={handleBlur(elem.label)}
                    value={values[elem.label]}
                    style={styles.textInput}
                    placeholder={elem.placeholder}
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry={isShow && elem.label === signup.PASSWORD}
                  />
                  {elem.label === signup.PASSWORD && (
                    <Icon
                      name={isShow ? "visibility-off" : "visibility"}
                      color={colors.textGray}
                      size={15}
                      style={styles.iconEye}
                      onPress={() => setIsShow(!isShow)}
                    />
                  )}
                  {errors[elem.label] && touched[elem.label] && (
                    <RobotoText style={styles.errorText} fontWeight={500}>
                      {errors[elem.label] || ""}
                    </RobotoText>
                  )}
                </View>
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
  errorText: {
    color: colors.red,
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
  iconEye: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  textHeading: {
    fontSize: 24,
    marginTop: StatusBar.currentHeight ? 240 + StatusBar.currentHeight : 240,
    marginBottom: 35,
    textAlign: "center",
    color: colors.textGray,
  },
  textInput: {
    height: 40,
    color: colors.textGray,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.textGray,
    paddingHorizontal: 27,
  },
});

export default Signup;
