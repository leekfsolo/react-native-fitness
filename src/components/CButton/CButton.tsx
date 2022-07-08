import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
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
      style={({ pressed }) => [
        styles.buttonHome,
        style,
        {
          opacity: disabled ? 0.3 : 1,
          backgroundColor: pressed ? "#a86607" : colors.orange,
        },
      ]}
      onPressIn={handleNavigate}
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
    borderRadius: 10,
    marginBottom: 18,
  },
});

export default CButton;
