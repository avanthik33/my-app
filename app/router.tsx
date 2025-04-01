import { createStackNavigator } from "@react-navigation/stack";
import Camera from "./pages/Camera";
import Home from "./pages/Home";
import Sensors from "./pages/Sensors";
import LightSensors from "./pages/Sensors/LightSensors";
import Notification from "./pages/Notifications";
import Authentication from "./pages/Authentication";
import Linking from "./pages/Linking";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Authentication">
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Sensors" component={Sensors} />
      <Stack.Screen name="LightSensors" component={LightSensors} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Linking" component={Linking} />
    </Stack.Navigator>
  );
}

export default MyStack;
