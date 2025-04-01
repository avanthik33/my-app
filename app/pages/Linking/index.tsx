import { View, Text, Button } from "react-native";
import React from "react";
import * as Linkings from "expo-linking";

const Linking = () => {
  return (
    <View>
      <Text>Linking</Text>
      <Button
        title="open phone"
        onPress={() => Linkings.openURL("tel:+1234567890")}
      />
      <Button
        title="open phone"
        onPress={() => Linkings.openURL("sms:+1234567890")}
      />
      <Button
        title="open phone"
        onPress={() =>
          Linkings.openURL("mailto:someone@example.com?subject=Hello&body=Hi")
        }
      />
    </View>
  );
};

export default Linking;
