import React from "react";

import { StatusBar, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import RobotoText from "../RobotoText/RobotoText";

type Props = {
  children: string;
  style?: Object;
  offsetTop?: number;
};

const Heading = (props: Props) => {
  const { children, style, offsetTop = 0 } = props;
  const styles = StyleSheet.create({
    heading: {
      fontSize: 24,
      textAlign: "center",
      color: colors.textGray,
      marginTop: StatusBar.currentHeight
        ? offsetTop + StatusBar.currentHeight
        : offsetTop,
    },
  });

  return <RobotoText style={[styles.heading, style]}>{children}</RobotoText>;
};

export default Heading;
