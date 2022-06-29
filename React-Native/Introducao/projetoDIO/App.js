import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGit = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfile = 'https://avatars.githubusercontent.com/u/87503412?v=4';
const urlToMyGithub = 'https://github.com/HenriqueSanchesSilva';

export default function App() {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGit} barStyle="light-content"/>
      <View>
        <Image style={styles.image} source={{uri: imageProfile}} />
        <Text
          accessibilityLabel="Nome: ismael moreira"
          style={[style.defaultText, style.name]}>
          Ismael Moreira
        </Text>
        <Text
          accessibilityLabel="Nickname: ismael sousa"
          style={[style.defaultText, style.nickname]}>
          ismaelsousa
        </Text>
        <Text
          accessibilityLabel="Descrição: Software engineer | Leader tech at Fleye | Mobile Developer | Mentor
          at Catapulta.club @ismaelmoreiraa | Prof. na DIO"
          style={[style.defaultText, style.description]}>
          Software engineer | Leader tech at Fleye | Mobile Developer | Mentor
          at Catapulta.club @ismaelmoreiraa | Prof. na DIO
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGit,
  },
  image: {
    width: 100, 
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 0.4
  },content: {
    alignItems: 'center',
    padding: 20,
  },avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});