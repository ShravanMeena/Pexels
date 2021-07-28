import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/components/navigation/tabs';
import {MovieDetail} from './src/screens';
import Categories from './src/screens/All/Categories';
import Collections from './src/screens/All/Collections';


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
          name="Categories"
          component={Categories}
        />

<Stack.Screen
          options={{headerShown: true}}
          name="Collections"
          component={Collections}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
