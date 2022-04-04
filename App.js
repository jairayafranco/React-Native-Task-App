import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createStackNavigator();

const opts = {
  headerStyle: { backgroundColor: '#222f3e' },
  headerTitleStyle: { color: '#fff' },
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            ...opts,
            title: 'Tasks App',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{ color: '#fff', marginRight: 20 }}>Añadir Tarea</Text>
              </TouchableOpacity>
            )
          })} />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} options={{ ...opts, title: 'Nueva Tarea', headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;