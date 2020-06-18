import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';

export default function App() {
  const handlePress=()=>console.log("Click me !");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!
       </Text>
       {/* <Image source={require("./assets/icon.png")}/> */}
       <Image 
        blurRadius={10}
        source={{
         width:200,
         height:200,
         uri:"https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-970-80.jpg"}}
       />
       <Button
        color="orange"
        title="Click me !"
        onPress={()=>alert('Button tapped !')}
       />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
