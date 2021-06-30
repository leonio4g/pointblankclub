import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

type ButtonProps = RectButtonProps & {
  children: ReactNode;
}

export function ButtonIcon({ children, ...props }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...props} >
      <View style={styles.iconWraper} >
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{children}</Text>
    </RectButton>
  )
}