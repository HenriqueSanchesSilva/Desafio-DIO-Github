import React, {
  useState,
  useEffect
} from "react";

import {
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
} from 'react-native';

import Torch from "react-native-torch";
import RNShake from 'react-native-shake';

import imageL from './assets/eco-light.png';
import imageD from './assets/eco-light-off.png';
import dioW from './assets/logo-dio-white.png';
import dio from './assets/logo-dio.png';


const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleOnPress = () => setToggle(old => !old);

  useEffect(()=>{
    Torch.switchState(toggle);
  },[toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=> {
      setToggle(old => !old);
    });

    return () => subscription.remove();
  },[]);

  return <View style={toggle ? style.containerL : style.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image style={toggle ? style.lightON : style.lightOFF} source={toggle ? imageL : imageD}/>
        <Image style={style.dio} source={toggle ? dio : dioW}/>
      </TouchableOpacity>
  </View>;
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerL: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightON:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOFF:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dio:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});