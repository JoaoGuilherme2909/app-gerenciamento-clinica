import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../pages/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import InitialPage from "../pages/InitialPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: '#E7B811',
                
            },
            drawerStyle: {
                backgroundColor: '#E7B811',
                
            },
            headerTintColor: 'white',
            drawerLabelStyle: {
                fontSize: 18,
                color: '#FFF'
            }
        }}>
            <Drawer.Screen name='Initial' component={InitialPage} options={{
                headerTitle: 'Agendamentos'
            }}/>
        </Drawer.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
                headerTitle: ""
            }}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Init" component={DrawerRoutes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}