import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  source: ImageSourcePropType;
};

const CImageBackground = (props: Props) => {
  const { source, children, style } = props;
  return (
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={[styles.bgContainer, style]}
    >
      {children}
    </ImageBackground>
  );
};

export default CImageBackground;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
});
