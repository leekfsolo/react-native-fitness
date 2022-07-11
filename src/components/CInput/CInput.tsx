import React, { useState } from "react";

import { FormikErrors, FormikTouched } from "formik";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../../assets/colors";
import { ACCOUNT } from "../../screens/reducer/enum";
import { SignupFormControl, SignupValue } from "../../screens/reducer/model";
import RobotoText from "../RobotoText/RobotoText";

type Props = {
  elem: SignupValue;
  values: SignupFormControl;
  errors: FormikErrors<SignupFormControl>;
  touched: FormikTouched<SignupFormControl>;
  handleChange: any;
  handleBlur: any;
};

const CInput = (props: Props) => {
  const { elem, values, errors, touched, handleBlur, handleChange } = props;

  const [isShow, setIsShow] = useState<boolean>(false);
  const isPassword = elem.label === ACCOUNT.PASSWORD;

  return (
    <View style={styles.formControl}>
      <TextInput
        onChangeText={handleChange(elem.label)}
        onBlur={handleBlur(elem.label)}
        value={values[elem.label]}
        style={styles.textInput}
        placeholder={elem.placeholder}
        placeholderTextColor="#9E9E9E"
        secureTextEntry={!isShow && isPassword}
        underlineColorAndroid="transparent"
      />
      {elem.label === ACCOUNT.PASSWORD && (
        <Icon
          name={isShow ? "visibility" : "visibility-off"}
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
  );
};

export default CInput;

const styles = StyleSheet.create({
  errorText: {
    color: colors.red,
  },
  formControl: {
    marginBottom: 25,
    width: "100%",
    position: "relative",
  },
  iconEye: {
    position: "absolute",
    top: 15,
    right: 15,
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
