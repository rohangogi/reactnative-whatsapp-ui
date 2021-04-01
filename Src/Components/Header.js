import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons';

const HeaderBar = ()=> {
    return(
        <View style={styles.container}>
            <View style={{paddingRight:15}}>
              <Ionicons name="search" size={24} color="#F88017" />
            </View>
              <Ionicons name="ellipsis-vertical" size={24} color="#F88017"/>
        </View>
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

export default HeaderBar;