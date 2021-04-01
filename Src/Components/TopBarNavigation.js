
import React, { useLayoutEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatsTab from '../Screens/ChatsTab';
import StatusTab from '../Screens/StatusTab';
import CallsTab from '../Screens/CallsTab';
import HeaderBar from './Header';


const Tab = createMaterialTopTabNavigator();

const TopBarNavigation = ({navigation}) =>{
    
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerRight: () => <HeaderBar />,
    //     });
    //   }, [navigation]);

    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#F88017',
                style:{
                    backgroundColor: '#2C3539'
                },
                indicatorStyle: {
                    backgroundColor: '#F88017',
                },
                headerRight: <HeaderBar />,
            }}
        >
            <Tab.Screen
                name="Chats"
                component={ChatsTab}
            />
            <Tab.Screen
                name = "Status"
                component = {StatusTab}
            />
            <Tab.Screen
                name="Calls"
                component={CallsTab}
            />
        </Tab.Navigator>
    );
};

export default TopBarNavigation;