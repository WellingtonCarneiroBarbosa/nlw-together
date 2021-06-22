import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.secondary90
    },

    image: {
      width: '100%',
      height: 360,    
    },

    content: {    
      marginTop: -70,    
      paddingHorizontal: 50
    },

    title: {
      color: theme.colors.heading,
      textAlign: 'center',
      fontSize: 35,
      marginBottom: 16,    
      fontFamily: theme.fonts.title700,
      lineHeight: 40
    },

    subtitle: {
      color: theme.colors.heading,
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 40,
      fontFamily: theme.fonts.title500,
      lineHeight: 25
    }
});