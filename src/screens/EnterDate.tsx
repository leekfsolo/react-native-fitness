import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import GoBack from "../components/GoBack";
import Heading from "../components/Heading";
import CButton from "../components/CButton";
import colors from "../assets/colors";
import RobotoText from "../components/RobotoText/RobotoText";
import { MONTHS } from "../constants";
import CDatePicker, { MODE } from "../components/CDatePicker";

type Props = NativeStackScreenProps<RootStackParamList>;

const EnterDate = ({ navigation }: Props) => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<MODE>(MODE.DATE);
  const [show, setShow] = useState<boolean>(false);
  const chooseDate = (value: Date) => {
    // choose date
    navigation.push("EnterTimes");
  };

  const formatDate = (date: Date) => {
    return `${
      MONTHS[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/images/5.jpg")}
        resizeMode="cover"
        style={styles.bgContainer}
      >
        <GoBack navigation={navigation} offsetTop={10} />
        <Heading offsetTop={400} style={{ marginBottom: 35 }}>
          When do you want to start?
        </Heading>

        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.datePicker}
        >
          <RobotoText style={{ color: colors.lightBlack, fontSize: 20 }}>
            {formatDate(date)}
          </RobotoText>
        </TouchableOpacity>
        <CButton
          fontSize={28}
          handleNavigate={() => chooseDate(date)}
          title="Continue"
          style={{ marginTop: 100, width: "100%" }}
        />
      </ImageBackground>
      {show && (
        <CDatePicker
          date={date}
          mode={mode}
          setDate={setDate}
          setShow={setShow}
          setMode={setMode}
        />
      )}
    </>
  );
};

export default EnterDate;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  datePicker: {
    alignItems: "center",
    backgroundColor: colors.darkGray,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
