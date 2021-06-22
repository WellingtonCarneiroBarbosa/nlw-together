import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  header: {
    width: '100%',
    paddingHorizontal: 10, // Padding intern margin extern spaces
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    marginTop: getStatusBarHeight() + 26, // Fix for iphones statusbar
    marginBottom: 35,
  },

  content: {
    marginTop: 35,
  }
});