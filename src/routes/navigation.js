import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/home";
import Ionicons from "@expo/vector-icons/Ionicons";
import Clientes from "../pages/clientes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Atendimentos from "../pages/Atendimentos";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Atendimentos"
      screenOptions={{
        headerShown: false,
        headerTitle: "",
        tabBarStyle: {
          backgroundColor: "#E7B811",
        },
      }}
    >
      <Tab.Screen
        name="Atendimentos"
        component={Atendimentos}
        options={{
          tabBarStyle: {
            backgroundColor: "#E7B811",
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={"bookmark"} size={24} />;
          },
        }}
      />

      <Tab.Screen
        name="Clientes"
        component={Clientes}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={"person"} size={24} />;
          },
          headerTitle: "Clientes",
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Init"
          component={TabRoutes}
          options={{
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#E7B811",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
