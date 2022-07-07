import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';



const App = () => {
  const [numero, setNumero] = useState(0);
  function handleNumero (){
    const novo_numero = Math.floor(Math.random() * 1000);
    setNumero(novo_numero);
  } 

  return(
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={'#fa8072'}/>
        <Text style={style.font}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
          <Text style={style.font}>Gerar número</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fa8072',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: '#2F2E33',
    width: '90%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10
  }
})

export default App;