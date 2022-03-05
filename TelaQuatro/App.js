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

        <StatusBar backgroundColor ='#E6DB55' barStyle='light-content'>

          <View style ={Style.content} >

            <Text style = {style.Text}>tarefas</Text>

          </View>
          <View style ={Style.content}>
            <image Style = {Style.image}>
              source ={require('./iu.jpg')}
            </image>
            <Image Style = {Style.image}>
              source ={require('./assets/ai.jpg')}
            </Image>
          </View>


          <TouchableOpacity style = {style.fab}>

            <Ionicons name='ios-add' size ='{30}'color ='#D9D16C'/>

          </TouchableOpacity>

        </StatusBar>

      </SafeAreaView>
    )
  }
  const Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#EBDF3D'
    },
    title:{
      marginTop:14,
      paddingBottom:14,
      fontSize: 29,
      textAlign:'center',
      color:'#D1C95C'
    },
    fab:{
      position:"absolute",
      width: 66,
      height: 66,
      backgroundColor:'#7A6179',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:30,
      right:23,
      bottom:23,
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
      width:10,
      height:11,
    }
  });
  }
  export default app3;