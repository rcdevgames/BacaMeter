import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from './Assets';

// Routes
import LoginPage from './View/Login';
import OTPPage from './View/OTP';
import SplashScreenPage from './View/SplashScreen';

const Stack = createStackNavigator();
const Route = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="/"
                    component={SplashScreenPage}
                />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="/login"
                    component={LoginPage}
                />
                <Stack.Screen
                    options={{
                        title: "",
                        headerBackTitleVisible: false,
                        headerTintColor: '#fff',
                        headerTransparent: true
                        
                    }}
                    name="/otp"
                    component={OTPPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;