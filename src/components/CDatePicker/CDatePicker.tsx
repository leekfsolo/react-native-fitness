import React, { useState } from "react";

import { Platform } from "react-native";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import colors from "../../assets/colors";

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

  return (
    <RNDateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={mode}
      is24Hour={true}
      display={Platform.OS === "ios" ? "spinner" : "default"}
      onChange={onChange}
      textColor={colors.lightGray}
      style={{ width: Platform.OS ? 300 : "auto" }}
    />
  );
};

export default CDatePicker;
