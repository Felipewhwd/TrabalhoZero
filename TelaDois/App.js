import React  from "react";
import{
  View,
  Text,
  StyleSheet,
  TextImput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
}from 'react-native';
import{Ionicons} from "@expo/vector-icons";

class app extends Comment{
  reader(){
    return(
      <SafeAreaView style = {style.conteiner}>

        <StatusBar backgroundColor ='#C077C9' barStyle='light-content'>

          <View style ={Style.content} >

            <Text style = {style.Text}>tarefas</Text>

          </View>
          <View style ={Style.content}>
            <image Style = {Style.image}>
              source ={require('./assets/b974c1872c2d2d1a06b506666bc0b89f.jpg')}
            </image>
            <Image Style = {Style.image}>
              source ={require('./assets/b9bc049a372cd609a83e0cc2eacd7482.jpg')}
            </Image>
          </View>


          <TouchableOpacity style = {style.fab}>

            <Ionicons name='ios-add' size ='{30}'color ='#C270BD'/>

          </TouchableOpacity>

        </StatusBar>

      </SafeAreaView>
    )
  }
  const Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#D9A0D5'
    },
    title:{
      marginTop:12,
      paddingBottom:12,
      fontSize: 27,
      textAlign:'center',
      color:'#D9A0D5'
    },
    fab:{
      position:"absolute",
      width: 65,
      height: 65,
      backgroundColor:'#7A6179',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:35,
      right:20,
      bottom:20,
      elevation:4,
      zIndex:11,
      shadowColor:'#003',
      shadowOpacity:0.2,
      shadowOffset:{
        width: 1,
        height: 3,
      }
    },
    image:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      width:9,
      height:9,
    }
  });
  }
  export default app3;