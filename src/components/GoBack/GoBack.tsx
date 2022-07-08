import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Icon } from "react-native-vector-icons/Icon";
import colors from "../../assets/colors";
import { RootStackParamList } from "../../routes";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  style?: Object;
};

const GoBack = (props: Props) => {
  const { navigation, style } = props;

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

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 35,
    left: 20,
  },
});
