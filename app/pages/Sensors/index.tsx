import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Barometer } from "expo-sensors";

const Sensors = ({ navigation }: any) => {
  const [{ pressure, relativeAltitude }, setData] = useState({
    pressure: 0,
    relativeAltitude: 0,
  });
  const [subscription, setSubscription] = useState<null | {
    remove: () => void;
  }>(null);

  const subscribe = () => {
    const sub = Barometer.addListener(({ pressure, relativeAltitude }) => {
      setData({
        pressure,
        relativeAltitude: relativeAltitude ?? 0,
      });
    });
    setSubscription(sub);
  };

  const unsubscribe = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
  };

  const toggleListener = () => {
    subscription ? unsubscribe() : subscribe();
  };

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("heelooo");
  console.log("heelooo");
  console.log("heelooo");
  console.log("heelooo");
  console.log("heelooo");
  console.log("heelooo");
  console.log("heelooo");

  return (
    <View style={styles.wrapper}>
      <Button
        title="Light sensors"
        onPress={() => navigation.navigate("LightSensors")}
      />
      <Text style={styles.header}>
        Barometer: Listener {subscription ? "ACTIVE" : "INACTIVE"}
      </Text>
      <Text style={styles.data}>Pressure: {pressure} hPa</Text>
      <Text style={styles.data}>
        Relative Altitude:
        {Platform.OS === "ios"
          ? `${relativeAltitude} m`
          : `Only available on iOS`}
      </Text>
      <TouchableOpacity onPress={toggleListener} style={styles.button}>
        <Text style={styles.buttonText}>Toggle Listener</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sensors;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 12,
    marginTop: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  wrapper: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  data: {
    fontSize: 16,
    marginBottom: 5,
  },
});
