import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes";
import Heading from "../components/Heading";
import CButton from "../components/CButton";
import CImageBackground from "../components/CImageBackground";

type Props = NativeStackScreenProps<RootStackParamList>;

const EnterName = ({ navigation }: Props) => {
  const imgBg = require("../assets/images/7.jpg");
  const handlesNextPage = () => {
    // Validate aacount
    navigation.navigate("Welcome");
  };

  return (
    <CImageBackground source={imgBg}>
      <Heading offsetTop={450} style={{ marginBottom: 35 }}>
        Your workouts start on Nov 20, 2021 for 3 times a week. Good luck Mike!
      </Heading>

      <CButton
        fontSize={28}
        handleNavigate={handlesNextPage}
        title="Let’s start"
        style={{ marginTop: 50, width: "100%" }}
      />
    </CImageBackground>
  );
};

export default EnterName;
