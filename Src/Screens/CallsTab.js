import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calls } from '../Data/Store';

const Item = ({ title, time, icons }) => (
<View>
<TouchableOpacity>
  <View style={styles.item}>
        <Image 
            source={require('../../assets/profile.png')}
            style={styles.pic}
        />
    
        {/* <Ionicons
        name="person-circle-sharp" size={30}
        />  */}
    <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons
                name={icons}
                size={22}
                color= '#F88017'
            />
            {/* <Text style={styles.time}>{time}</Text> */}
        </View>
        <View style={styles.msgContainer}>
            <Text style={styles.msgTxt}>{time}</Text>
        </View>       
    </View>
      
  </View>
  </TouchableOpacity>
</View>
);


const CallsTab = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} time={item.time} icons={item.icons} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Calls}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#25383C',
     flex: 1,
    // //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    padding: 10,
    // backgroundColor: '#5C5858',
    //  padding: 15,
     borderBottomWidth: 0.5,
     borderBottomColor: '#463E3F',
    //  paddingBottom:25,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  mainContainer:{
    //   borderBottomWidth:0.5,
    //   borderBottomColor: 'black',
  },
  title: {
    marginLeft: 15,
    fontWeight: '600',
    color: 'white',
    fontSize: 15,
  },
  nameContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  time: {
    fontWeight: '200',
    color: 'white',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#6D6968',
    fontSize: 12,
    marginLeft:15,
  },
  updateTextStyle:{
      borderTopWidth:0.4,
      borderTopColor:'black',
      borderBottomWidth:1,
      borderBottomColor:'#463E3F',
  },
});

export default CallsTab;