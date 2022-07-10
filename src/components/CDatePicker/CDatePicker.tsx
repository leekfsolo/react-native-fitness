import React, { useState } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import colors from "../../assets/colors";
import RobotoText from "../RobotoText/RobotoText";

export enum MODE {
  DATE = "date",
  TIME = "time",
}

type Props = {
  date: Date;
  mode: MODE;
  setMode: (mode: MODE) => void;
  setDate: (date: Date) => void;
  setShow: (show: boolean) => void;
};

const CDatePicker = (props: Props) => {
  const { date, setDate, mode, setMode, setShow } = props;

  const onChange = (event: DateTimePickerEvent, selectedValue?: Date) => {
    setShow(Platform.OS === "ios");
    if (mode === MODE.DATE) {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode(MODE.DATE);
    }
  };

  const onClose = (date?: Date) => {
    setShow(false);

    if (date && Platform.OS !== "ios") {
      setDate(date);
    }
  };

  return (
    <TouchableOpacity onPress={() => onClose()} style={styles.container}>
      {Platform.OS === "ios" && (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <RobotoText
              fontWeight={700}
              style={{ color: colors.orange, fontSize: 18 }}
            >
              Done
            </RobotoText>
          </TouchableOpacity>
        </View>
      )}
      <DateTimePicker
        value={date}
        mode="date"
        display={Platform.OS === "ios" ? "spinner" : "default"}
        onChange={onChange}
        style={{ backgroundColor: "white" }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.OS === "ios" ? "#00000066" : "transparent",
    position: "absolute",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  header: {
    width: "100%",
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
});

export default CDatePicker;
