import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Status } from '../Data/Store';

const Item = ({ title, time }) => (
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


const StatusTab = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} time={item.time} />
  );

const StatusHeader = () =>{
    return(
        <View>
          <TouchableOpacity>
            <View style={styles.item}>
            
                <TouchableOpacity>
                    <Image 
                        source={require('../../assets/bike.jpg')}
                        style={styles.pic}
                    />
                </TouchableOpacity>
                    {/* <Ionicons
                    name="person-circle-sharp" size={30}
                    />  */}
                <View style={styles.mainContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>My Status</Text>
                        {/* <Text style={styles.time}>{time}</Text> */}
                    </View>
                    <View style={styles.msgContainer}>
                        <Text style={styles.msgTxt}>Tap to add status update</Text>
                    </View>       
                </View>  
            </View>
          </TouchableOpacity>
            <View style={styles.updateTextStyle}>
                    <Text style={{paddingLeft:15,paddingBottom:3,paddingTop:2, color:'#B6B6B4'}}>Recent Updates</Text>
            </View>
          
        </View>
    );
};
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={StatusHeader}
        data={Status}
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

export default StatusTab;