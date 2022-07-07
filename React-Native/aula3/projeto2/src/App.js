import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import perfil from './assets/perfil.jpeg';
import Icon from 'react-native-vector-icons/Feather'

const App = () => {
  return (
    <>
      <SafeAreaView style={style.page}>
        <StatusBar backgroundColor={'#e7e7e7'} barStyle={'light-content'}/>
        <View style={style.container}>
          <Image source={perfil} style={style.foto}/>
          <Text style={style.nome}>Henrique Sanches Silva</Text>
          <Text style={style.funcao}>Desenvolvedor FullStack</Text>
          <View>
            <Icon name='github'/>
            <Icon name='facebookuare'/>
            <Icon name='linkedin-square'/>
          </View>
        </View>  
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container:{
    flex:  1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nome: {
    fontSize: 22,
    fontWeight : 'bold',
    color:'black',
    marginTop: 10
  },
  funcao: {
    color: 'black',
    marginBottom: 10
  },
  icon:{
    width:20,
  },
});

export default App;
