import React  from "react";
import{
  View,
  Text,
  StyleSheet,
  TextImput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
}
from 'react-native';
import{Ionicons} from "@expo/vector-icons";
class app1 extends Comment{
  reader(){
    return(
<SafeAreaView style = {style.conteiner}>
<StatusBar backgroundColor ='#5065C7' barStyle='light-content'>
<View style ={Style.content} >
<Text style = {style.Text}>tarefas</Text>
</View>
<TouchableOpacity style = {style.fab}>
<Ionicons name='ios-add' size ='{35}'color ='#C1C1D9'/>
          </TouchableOpacity>
        </StatusBar>
      </SafeAreaView>
    )
  }

  const = Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#7668BA'
    },
    title:{
      marginTop:12,
      paddingBottom:12,
      fontSize: 29,
      textAlign:'center',
      color:'#7668BA'
    },
    fab:{
      position:"absolute",
      width: 50,
      height: 50,
      backgroundColor:'#392D52',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:35,
      right:27,
      bottom:27,
      elevation:4,
      zIndex:11,
      shadowColor:'#D4C1E8',
      shadowOpacity:0.2,

      shadowOffset:{
      width: 1,
      height: 3,
      }
    }
  });
}
export default app1;