import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 24, // Padding intern margin extern spaces
    flexDirection: 'row',
    justifyContent: 'space-between' ,
    marginTop: getStatusBarHeight() + 26, // Fix for iphones statusbar
  }
});