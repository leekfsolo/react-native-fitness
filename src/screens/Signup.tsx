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

type Props = NativeStackScreenProps<RootStackParamList>;

const Signup = ({ navigation }: Props) => {
  const [text, setText] = useState<string>("");
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

        <Text
          style={{
            fontSize: 24,
            marginTop: StatusBar.currentHeight
              ? 240 + StatusBar.currentHeight
              : 240,
            marginBottom: 35,
            textAlign: "center",
            color: colors.textGray,
          }}
        >
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
  goBack: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 35,
    left: 20,
  },
  textInput: {
    height: 40,
    color: colors.textGray,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.textGray,
    paddingLeft: 20,
    marginBottom: 25,
  },
});

export default Signup;
