
import 'react-native-gesture-handler';
import React from 'react';
import {View,StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopBarNavigation from './Src/Components/TopBarNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';




const Stack = createStackNavigator();

const App = () =>{

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TopBarNavigation"
          component={TopBarNavigation}
          options ={{
          headerTitle: 'VChat',
          headerTintColor: '#F88017',
          headerStyle:{
            backgroundColor: '#2C3539'
          },
          headerTitleStyle: {
              fontWeight: 'bold', 
            },
            
            
          headerRight: () =>( 
            <View style={styles.container}>
            <View style={{paddingRight:15}}>
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="#F88017" />
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={24} color="#F88017"/>
            </TouchableOpacity>
            </View>
          ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: 10,
  },
});

export default App;
