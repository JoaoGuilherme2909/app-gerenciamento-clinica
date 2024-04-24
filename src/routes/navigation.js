import { Link, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Agendamentos from '../pages/Agendamentos';
import Clientes from '../pages/clientes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes(){
    return (
        <Drawer.Navigator initialRouteName='Agendamentos' screenOptions={{
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
            <Drawer.Screen name='Agendamentos' component={Agendamentos} options={{
                headerTitle: 'Agendamentos'
            }} />

            <Drawer.Screen name='Clientes' component={Clientes} options={{
                headerTitle: 'Clientes'
            }} />
        </Drawer.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false,
                headerTitle: ''
            }}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Init' component={DrawerRoutes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}