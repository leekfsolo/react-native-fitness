import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";
import Signin from "../screens/Signin";
import EnterName from "../screens/EnterName";
import EnterDate from "../screens/EnterDate";
import EnterTimes from "../screens/EnterTimes";
import Finish from "../screens/Finish";

export type RootStackParamList = {
  Welcome: undefined;
  Signup: undefined;
  Signin: undefined;
  EnterName: undefined;
  EnterDate: undefined;
  EnterTimes: undefined;
  Finish: undefined;
};

const Navigators = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="EnterName" component={EnterName} />
        <Stack.Screen name="EnterDate" component={EnterDate} />
        <Stack.Screen name="EnterTimes" component={EnterTimes} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
