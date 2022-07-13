import React, { useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import GoBack from "../components/GoBack";
import Heading from "../components/Heading";
import CButton from "../components/CButton";
import CSelect from "../components/CSelect";
import CImageBackground from "../components/CImageBackground";
import { View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList>;

const EnterName = ({ navigation }: Props) => {
  const [selectedTimes, setSelectedTimes] = useState<string>("3 times a week");
  const imgBg = require("../assets/images/6.jpg");

  const handleTimes = (times: string) => {
    // Validate aacount
    navigation.push("Finish");
  };

  return (
    <CImageBackground source={imgBg}>
      <GoBack navigation={navigation} offsetTop={20} />
      <Heading offsetTop={400} style={{ marginBottom: 35 }}>
        How many times a week do you want to be active?
      </Heading>

      <View style={{ width: "50%" }}>
        <CSelect
          selectedTimes={selectedTimes}
          setSelectedTimes={setSelectedTimes}
        />
      </View>

      <CButton
        fontSize={28}
        handleNavigate={() => handleTimes(selectedTimes)}
        title="Continue"
        style={{ marginTop: 50, width: "100%" }}
      />
    </CImageBackground>
  );
};

export default EnterName;
