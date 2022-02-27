import 'react-native-gesture-handler';
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import Calendar from './src/screens/Calendar';
import Home from './src/screens/Home';
import {
  Button,
  Colors,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export default function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Drawer.Navigator initialRouteName="Calendar">
          <Drawer.Screen
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            name="Calendar"
            component={Calendar}
            options={({ route, navigation }) => ({
              headerTitle: 'Schedule',
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
