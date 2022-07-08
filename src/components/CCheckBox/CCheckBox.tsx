import Checkbox from "expo-checkbox";
import React, { Dispatch, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../assets/colors";
import { checkboxActionType } from "../../screens/reducer/enum";
import RobotoText from "../RobotoText/RobotoText";

type Props = {
  label: string;
  isSelected: boolean;
  setSelection: () => void;
};

const CCheckBox = (props: Props) => {
  const { label, isSelected, setSelection } = props;

  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
        color={colors.green}
      />
      <RobotoText style={styles.label}>{label}</RobotoText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color: colors.white,
    fontSize: 18,
  },
});

export default CCheckBox;
