import { ImageBackground, ImageSourcePropType, StyleSheet } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  source: ImageSourcePropType;
};

const CImageBackground = (props: Props) => {
  const { source, children } = props;
  return (
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={styles.bgContainer}
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
