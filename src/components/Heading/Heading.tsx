import React from "react";

import { StyleSheet, Text, View } from "react-native";
import colors from "../../assets/colors";
import RobotoText from "../RobotoText/RobotoText";

type Props = {
  children: string;
  style?: Object;
};

const Heading = (props: Props) => {
  const { children, style } = props;

  return <RobotoText style={[styles.heading, style]}>{children}</RobotoText>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: "center",
    color: colors.textGray,
  },
});
