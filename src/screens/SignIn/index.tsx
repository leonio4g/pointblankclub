import React from "react";
import { 
  View, 
  Text, 
  Image
 } from 'react-native';
 import { useNavigation } from "@react-navigation/native";
import { ButtonIcon } from '../../components/ButtonIcon'
 import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles'



export function SignIn(){

  const navigator = useNavigation();

  function handleSignIn(){
    navigator.navigate('Home');
  }

  return(
    <View style={styles.container} >
      
      <Image 
      source={IllustrationImg} 
      style={styles.image}
      resizeMode="stretch"
       />
      <View style={styles.content}>
        <Text style={styles.title}> 
        Conecte-se {`\n`} 
        e organize suas{`\n`}
        jogatinas</Text>

        <Text style={styles.subtitle} >
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon 
        onPress={() => handleSignIn()}
        >Entrar com Discord</ButtonIcon>
      </View>
    </View>
  );
}