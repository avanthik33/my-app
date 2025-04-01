import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LightSensor } from "expo-sensors";

const LightSensors = () => {
  const [{ illuminance }, setData] = useState<{ illuminance: number }>({
    illuminance: 0,
  });
  const [subscription, setSubscription] = useState<null | {
    remove: () => void;
  }>(null);

  const subscribe = () => {
    const sub = LightSensor.addListener(({ illuminance }) => {
      setData({ illuminance: illuminance ?? 0 });
    });
    setSubscription(sub);
  };

  const unsubscribe = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }
  };

  const toggle = () => {
    subscription ? unsubscribe() : subscribe();
  };

  useEffect(() => {
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.sensor}>
      <Text style={styles.header}>Light Sensor:</Text>
      <Text style={styles.data}>
        Illuminance:{" "}
        {Platform.OS === "android"
          ? `${illuminance} lx`
          : `Only available on Android`}
      </Text>
      <TouchableOpacity onPress={toggle} style={styles.button}>
        <Text style={styles.buttonText}>
          {subscription ? "Stop Sensor" : "Start Sensor"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LightSensors;

const styles = StyleSheet.create({
  sensor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
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
  button: {
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
});
