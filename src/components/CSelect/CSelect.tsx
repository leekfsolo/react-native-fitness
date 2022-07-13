import React from "react";
import { StyleSheet } from "react-native";

import PickerSelect from "react-native-picker-select";
import colors from "../../assets/colors";

type Props = {
  selectedTimes: string;
  setSelectedTimes: (selectedTimes: string) => void;
};

const CSelect = (props: Props) => {
  const { selectedTimes, setSelectedTimes } = props;

  return (
    <PickerSelect
      onValueChange={(value) => setSelectedTimes(value)}
      value={selectedTimes}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Choose your procedure", color: colors.lightBlack }}
      style={{
        inputIOS: {
          color: colors.lightBlack,
          backgroundColor: colors.darkGray,
          fontSize: 16,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: 4,
          textAlign: "center",
        },
        inputAndroid: {
          color: colors.lightBlack,
          backgroundColor: colors.darkGray,
          fontSize: 16,
          paddingHorizontal: 45,
          paddingVertical: 10,
          borderRadius: 8,
          textAlign: "center",
        },
        placeholder: {
          color: colors.lightBlack,
        },
      }}
      items={[
        { label: "1 time a week", value: "1 time a week" },
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
