import React from "react";
import { Platform, StyleSheet } from "react-native";

import PickerSelect from "react-native-picker-select";
import colors from "../../assets/colors";

type Props = {
  selectedTimes: string;
  setSelectedTimes: (selectedTimes: string) => void;
  setShow: (show: boolean) => void;
  style?: Object;
};

const CSelect = (props: Props) => {
  const { selectedTimes, setSelectedTimes, style } = props;

  return (
    <PickerSelect
      onValueChange={(value) => setSelectedTimes(value)}
      value={selectedTimes}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Choose your procedure", color: colors.lightBlack }}
      style={{
        inputIOS: {
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 4,
          color: colors.lightBlack,
          backgroundColor: colors.darkGray,
        },
        inputAndroid: {
          color: colors.lightBlack,
          backgroundColor: colors.darkGray,
          fontSize: 16,
          paddingHorizontal: 28,
          paddingVertical: 8,
          borderRadius: 8,
          textAlign: "center",
        },
        placeholder: {
          color: colors.lightBlack,
        },
      }}
      items={[
        { label: "1 times a week", value: "1 times a week" },
        { label: "2 times a week", value: "2 times a week" },
        { label: "3 times a week", value: "3 times a week" },
        { label: "4 times a week", value: "4 times a week" },
        { label: "5 times a week", value: "5 times a week" },
        { label: "over 5 times a week", value: "over 5 times a week" },
      ]}
    />
  );
};

export default CSelect;

const styles = StyleSheet.create({});
