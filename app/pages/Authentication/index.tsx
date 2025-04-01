import { View, Text } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Authentication = ({ navigation }: any) => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const setupApp = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve("hello world"), 2000)
        );
        console.log("response :", response);
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    };

    setupApp();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Text>Authenticating.....</Text>
    </View>
  );
};

export default Authentication;
