import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import GoBack from "../components/GoBack";
import Heading from "../components/Heading";
import CButton from "../components/CButton";
import colors from "../assets/colors";
import RobotoText from "../components/RobotoText/RobotoText";
import CSelect from "../components/CSelect";

type Props = NativeStackScreenProps<RootStackParamList>;

const EnterName = ({ navigation }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedTimes, setSelectedTimes] = useState<string>("3 times a week");

  const handleTimes = (times: string) => {
    // Validate aacount
    navigation.push("Finish");
  };

  return (
    <ImageBackground
      source={require("../assets/images/6.jpg")}
      resizeMode="cover"
      style={styles.bgContainer}
    >
      <GoBack navigation={navigation} offsetTop={20} />
      <Heading offsetTop={400} style={{ marginBottom: 35 }}>
        How many times a week do you want to be active?
      </Heading>

      <CSelect
        selectedTimes={selectedTimes}
        setSelectedTimes={setSelectedTimes}
        setShow={setShow}
      />

      <CButton
        fontSize={28}
        handleNavigate={() => handleTimes(selectedTimes)}
        title="Continue"
        style={{ marginTop: 50, width: "100%" }}
      />
    </ImageBackground>
  );
};

export default EnterName;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
});
