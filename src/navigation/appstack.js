import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/detail";

import HomeScreen from "../screens/home";
import { HEAD_COLOR } from "../apiutils/stat";

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: HEAD_COLOR,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerBackTitle: "Back to List",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
