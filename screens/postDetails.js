import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Post = ({navigation}) => {


    const image = { uri: 
      "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    };

    const [gallery, setGallery] = useState([
      { image : {uri: "https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
      title: 'Paris', key: '1'},
      { image : {uri: "https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
      title: 'New Zealand', key: '2'},
      { image : {uri: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
      title: 'Utah', key: '3'},
      { image : {uri: "https://images.unsplash.com/photo-1480548004877-593316be2bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
      title: 'London', key: '4'}
    ])
   
    const goBack = () => {
      navigation.goBack();
    }


  return (
       <View style={{backgroundColor: '#fff', flex: 1}}>
         <ImageBackground 
           source={image}
           style={styles.image}
           imageStyle={{borderBottomRightRadius: 30, borderBottomLeftRadius: 30}}
         >

          <Text style={styles.TagLine}>Discover Switzerland</Text>
          <Text style={styles.PlaceName}>Explore the scenic beauty of Switzerland </Text>

          <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 20, top: 30, backgroundColor: '#ff6200', padding: 10,borderRadius: 40}}>
            <Feather name='arrow-left' size={24} color='#fff' />
          </TouchableOpacity>

          <TouchableOpacity style={{position: 'absolute', right: 20, top: 30, backgroundColor: '#ff6200', padding: 10,borderRadius: 40}}>
            <Feather name='heart' size={22} color='#fff' />
          </TouchableOpacity>

          </ImageBackground>

          <TouchableOpacity style={styles.BookTicketBtn}>
            <Text style={styles.BookTicketText}>Book Now</Text>
          </TouchableOpacity>


          <ScrollView style={{backgroundColor: 'white'}}>
            <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>About the place</Text>
            <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.5, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26}}>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quos beatae facilis rem et quisquam aut mollitia 
             recusandae reiciendis eveniet fugiat, corporis deleniti laudantium iure non placeat molestias similique quam, voluptatibus 
             quo velit veniam. Voluptates reprehenderit ipsam molestiae. Vel dolorem optio, nisi quibusdam perspiciatis dolorum expedita 
             amet suscipit nobis vitae adipisci distinctio, odit laudantium similique harum maxime, quae quidem cumque? Fugit vitae est
              praesentium? Delectus perspiciatis ex harum voluptas rerum totam sapiente cumque assumenda, dolorum libero.
               Hic perferendis nobis voluptatem laboriosam nulla voluptate rerum quia velit iure sapiente amet accusamus obcaecati 
            provident deleniti dignissimos maiores odio nisi animi, distinctio aut!
            </Text>
            <View>
                <Text style={{padding: 14,fontSize: 20, fontWeight: 'bold'}}>Suggested Places</Text>
                <FlatList
                horizontal={true}
                 data={gallery}
                 renderItem={({item}) => {
                   return (
                     <View>
                       <View>
                         <Image source={item.image} style={{width: 150, height: 150,marginHorizontal: 10,borderRadius: 10}} />
                         <View style={styles.darkOverlay}></View>
                         <Feather name="map-pin" size={16} color='white' style={{marginHorizontal: 14, marginTop: 4, position: 'absolute',left:10, bottom: 10}} />
                         <Text style={{marginHorizontal: 14, marginTop: 4, position: 'absolute', left:30, bottom: 10, fontSize: 14, color: '#fff'}}>{item.title}</Text>
                       </View>
                     </View>
                   )
                 }}
                 />
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
  image: {
    height: 380,
    justifyContent: 'flex-end'
  },
 TagLine : {
   color: 'white',
   fontSize: 16,
   fontWeight: 'bold',
   paddingHorizontal: 14,
   marginVertical: 6
 }, 
 PlaceName: {
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  paddingHorizontal: 14,
  marginBottom: 30
 },
 BookTicketBtn: {
   position: 'absolute',
   right: 12,
   top: 330,
   backgroundColor: '#ff6200',
   padding: 16,
   borderRadius: 40,
   elevation: 5
 },
 BookTicketText: {
   color: '#fff',
   fontSize: 14
 }, 
 darkOverlay: {
   width: 150,
   height: 150,
   position: 'absolute',
   backgroundColor: '#000',
   opacity: 0.2,
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   borderRadius: 10,
   marginHorizontal: 10
 }
});
export default Post;
