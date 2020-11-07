import React, {useState} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput} 
from 'react-native';
import {Feather} from '@expo/vector-icons'
import { add } from 'react-native-reanimated';
import { Navigation } from 'react-native-navigation';

const Home = ({navigation}) => {

    const recentImage = {
        uri: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }

    const image = {
        uri: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    };

    const [gallery, setgallery] = useState([
        { image: { uri: 
    'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}, title: 'New Zealand', key: '1'
        },
        { image: { uri: 
            'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}, title: 'Switzerland', key: '2'
                },
        { image: { uri: 
                    'https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}, title: 'Rome', key: '3'
                        },
       { image: { uri: 
           'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}, title: 'Utah', key: '4'
 },
    ])

    const goToPost = () => {
        navigation.navigate('Post');
    }

  return (
       <View style={{flexGrow: 1, height: '100%'}}>
          <View>
              <ImageBackground 
               source={image}
               style={{width: '100%', height: 270}}
               imageStyle = {{borderBottomRightRadius: 65}}
                >
                <View style={styles.DarkOverlay}>
                    <View style={styles.searchContainer}>
                        <Text style={styles.UserGreet}>Hi Abror</Text>
                        <Text style={styles.userText}>Where would you like to go today?</Text>
                    </View>
                </View>
                <View>
                    <TextInput
                     style={styles.searchBox}
                     placeholder='Search Destination'
                     placeholderTextColor='#666'
                     >
                    </TextInput>
                   <Feather name='search' size={22} color='#666' style={{position: 'absolute', top: 40, right: 60, opacity: 0.6}} />
                </View>
                {/* <Feather name='menu' size={22} color='#fff' 
                  style={{position: 'absolute', top: 40, left: 16 }} /> */}
                <Feather name='bell' size={24} color='#fff' 
                  style={{position: 'absolute', top: 40, right: 10 }} />
               </ImageBackground>
          </View>

        <ScrollView>
           <View style={{padding: 20}}>
               <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Trending</Text>
           </View>
           <View>
               <FlatList 
               horizontal={true}
                 data={gallery}
                 renderItem={({item}) => {
                     return (
                         <View style={{paddingVertical: 20, paddingLeft: 16}}>
                             <TouchableOpacity onPress={goToPost}>
                                 <Image source={item.image} style={{width: 150, marginRight: 8, height: 250, borderRadius: 10}} />
                                 <View style={styles.imageOverlay}></View>
                                 <Feather name='map-pin' size={16} color='white' style={styles.imageLocationIcon} />
                                 <Text style={styles.imageText}>{item.title}</Text>
                             </TouchableOpacity>
                         </View>
                     )
                 }}

               />
           </View>
           <View style={{marginBottom: 60}}>
               <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                   <Text style={{fontSize: 22, fontWeight: 'bold'}}>Recently Viewed</Text>
                   <Text style={{fontWeight: 'bold', fontSize: 14, color: '#ff6200'}}>View All</Text>
               </View>
               <Image 
                 source={recentImage}
                 style={{width: '92%', height: 250, borderRadius: 10, alignSelf: 'center'}}  
               />
               <View style={{position: 'absolute', bottom: 0, padding: 16}}>
                   <View style={{flexDirection: 'row'}}>
                     <Feather name='map-pin' color='white' size={22} style={{marginLeft: 10, position: 'relative', top: 4}} />
                    <Text style={{fontSize: 22, color: 'white',fontWeight: 'normal', marginBottom: 10, marginHorizontal: 10}}>Venice</Text>
                   </View>
                   <Text style={{fontSize: 14, color: 'white', fontWeight: 'normal', marginBottom: 6, opacity: 0.9, marginLeft: 16}}>
                      Venice, the capital of Northern Italy's Veneto Region in the Adriatic Sea
                       </Text>
               </View>
           </View>
        </ScrollView>









      </View>
  );
}

const styles = StyleSheet.create({
  container: { 
     flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#fff',
  },
  searchContainer: {
   paddingTop: 180,
   paddingLeft: 16
  },
  DarkOverlay : {
      position: "absolute",
      top: 0,
      left: 0,
      height: 270,
      backgroundColor: '#000',
      opacity: 0.2,
      borderBottomRightRadius: 65
  },
  UserGreet : {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#fff'
  },
  userText: {
      fontSize: 16,
      fontWeight: 'normal',
      color: '#fff'
  },
  searchBox : {
      marginTop: 30,
      backgroundColor: '#fff',
      paddingLeft: 24,
      padding: 12,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      width: '90%'
  },
  imageOverlay: {
      width: 150,
      height: 150,
      marginRight: 8,
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: '#000',
      opacity: 0.2
  },
  imageLocationIcon: {
      position: 'absolute',
      marginTop: 4,
      left: 10,
      bottom: 10
  },
  imageText: {
      position: 'absolute',
      color: 'white',
      marginTop: 4,
      fontSize: 14,
      left: 30,
      bottom: 10
  }
});
export default Home;
