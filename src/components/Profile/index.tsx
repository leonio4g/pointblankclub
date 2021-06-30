import React from 'react';
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';


export function Profile(){
  const { secondary50, secondary70 } = theme.colors;


  return(
    <View style={styles.container} >
      <LinearGradient
      style={styles.avatarContainer}
      colors={[secondary50, secondary70]}
    >
      <Image 
      source={{uri : "https://github.com/leonio4g.png"}} 
      style={styles.avatar} 
      />
    </LinearGradient>
      <View>
        <View style={styles.user} >
        <Text style={styles.greeting} >Olá,</Text>
        <Text style={styles.username}>Leonio</Text>
        </View>
        <Text style={styles.message} >Hoje é dia de vitoria</Text>
      </View>
    </View>
  );
}