import MainNavigator from './src/navigation/MainNavigator'
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'
import colors from './src/utils/globals/colors'
import { store } from './src/app/store'
import {Provider} from 'react-redux'


const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.brown1} />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackCoffee
  },
});

export default App;