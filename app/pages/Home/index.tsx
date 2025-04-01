import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Home = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello welcome home</Text>
      <View>
        <Button
          title="Go Camera"
          onPress={() => navigation.navigate("Camera")}
        />
      </View>
      <View>
        <Button
          title="Go Sensors"
          onPress={() => navigation.navigate("Sensors")}
        />
      </View>
      <View>
        <Button
          title="Go Notifications"
          onPress={() => navigation.navigate("Notification")}
        />
      </View>
      <View>
        <Button
          title="Go Linking"
          onPress={() => navigation.navigate("Linking")}
        />
      </View>

      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
          }} // Replace with your image URL
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <View style={styles.promoLabel}>
              <Text style={styles.promoText}>Promo</Text>
            </View>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  position: "absolute",
                  top: 5,
                  left: 10,
                  right: -10,
                  height: "50%",
                  backgroundColor: "black",
                }}
              />
              <Text style={{ fontSize: 20, color: "white" }}>
                Buy one get one Free
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  promoLabel: {
    backgroundColor: "#e53935",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  promoText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  offerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
