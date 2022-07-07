import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../assets/colors";

type Props = {
  handleNavigate: () => void;
  fontSize: number;
  title: string;
  style?: Object;
  disabled?: boolean;
};

const CButton = (props: Props) => {
  const { handleNavigate, fontSize, title, style, disabled = false } = props;

  return (
    <Pressable
      style={[styles.buttonHome, style, { opacity: disabled ? 0.3 : 1 }]}
      onPress={handleNavigate}
      disabled={disabled}
    >
      <Text style={[styles.baseText, { fontSize }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseText: {
    color: colors.textGray,
    textAlign: "center",
    fontWeight: "400",
  },
  buttonHome: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: colors.orange,
    borderRadius: 10,
    marginBottom: 18,
  },
});

export default CButton;
