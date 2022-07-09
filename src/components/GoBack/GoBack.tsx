import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/colors";
import { RootStackParamList } from "../../routes";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  style?: Object;
  offsetTop?: number;
};

const GoBack = (props: Props) => {
  const { navigation, style, offsetTop = 0 } = props;
  const styles = StyleSheet.create({
    goBack: {
      position: "absolute",
      top: StatusBar.currentHeight
        ? StatusBar.currentHeight + offsetTop
        : offsetTop + 15,
      left: 20,
    },
  });

  return (
    <TouchableHighlight
      style={[styles.goBack, style]}
      onPress={() => navigation.goBack()}
    >
      <Icon name="west" color={colors.textGray} size={15} />
    </TouchableHighlight>
  );
};

export default GoBack;
