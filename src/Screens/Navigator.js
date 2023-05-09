import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import PickUpScreen from "./PickUpScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
import ForgetScreen from "./ForgetScreen";


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                {/*<Stack.Screen name="HomeScreen" component={HomeScreen} />*/}
                {/*<Stack.Screen name="PickUpScreen" component={PickUpScreen} />*/}
                {/*<Stack.Screen name="CartScreen" component={CartScreen} />*/}
                {/*<Stack.Screen name="ProfileScreen" component={ProfileScreen} />*/}
                {/*<Stack.Screen name="OrderScreen" component={OrderScreen} />*/}
                {/*<Stack.Screen name="ForgetScreen" component={ForgetScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Navigator;
