import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  user:{
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  avatarContainer:{
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 22,
  },
  avatar:{
    width: 46,
    height: 46,
    borderRadius: 8,
  }
})