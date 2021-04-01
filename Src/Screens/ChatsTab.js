import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DATA from '../Data/Store';


const Item = ({ title, time, message }) => (
<View>
  <View style={styles.item}>
  
    <TouchableOpacity>
        <Image 
            source={require('../../assets/profile.png')}
            style={styles.pic}
        />
    </TouchableOpacity>
        {/* <Ionicons
        name="person-circle-sharp" size={30}
        />  */}
    <View style={styles.mainContainer}>
    <TouchableOpacity>
        <View style={styles.nameContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.msgContainer}>
            <Text numberOfLines={1} style={styles.msgTxt}>
            {/* { ((message).length > 30) ? 
              (((message).substring(0,30)) + '...') : 
              message } */}
              {message}
            </Text>
        </View> 
        </TouchableOpacity>      
    </View>
      
  </View>
</View>
);


const ChatsTab = ({route,navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} time={item.time} message={item.message} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    {/* </ScrollView> */}
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
    color: '#6D6968',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    width: '70%',
    fontWeight: '400',
    color: '#6D6968',
    fontSize: 12,
    marginLeft:15,
  },
});

export default ChatsTab;