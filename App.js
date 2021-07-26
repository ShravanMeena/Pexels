import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/components/navigation/tabs';
import All from './src/screens/All';
import {MovieDetail} from './src/screens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen name="MovieDetail" component={MovieDetail} />

        <Stack.Screen
          options={{headerShown: true}}
          name="All"
          component={All}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
