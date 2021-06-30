import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -30,
    paddingHorizontal: 30,
  },
  title: {
    color: theme.colors.heading,
    lineHeight:40,
    textAlign: 'center',
    fontSize:40,
    marginBottom:16,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.heading,
    fontSize:16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  }
})