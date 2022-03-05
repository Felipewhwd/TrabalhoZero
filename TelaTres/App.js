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

        <StatusBar backgroundColor ='#73E6A1' barStyle='light-content'>

          <View style ={Style.content} >

            <Text style = {style.Text}>tarefas</Text>

          </View>
          <View style ={Style.content}>
            <image Style = {Style.image}>
              source ={require('./assets/chic.jpg')}
            </image>
            <Image Style = {Style.image}>
              source ={require('./assets/chi.jpg')}
            </Image>
          </View>


          <TouchableOpacity style = {style.fab}>

            <Ionicons name='ios-add' size ='{30}'color ='#339159'/>

          </TouchableOpacity>

        </StatusBar>

      </SafeAreaView>
    )
  }
  const Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#387350'
    },
    title:{
      marginTop:15,
      paddingBottom:15,
      fontSize: 30,
      textAlign:'center',
      color:'#1C3D29'
    },
    fab:{
      position:"absolute",
      width: 67,
      height: 67,
      backgroundColor:'#1C452C',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:37,
      right:22,
      bottom:22,
      elevation:2,
      zIndex:10,
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