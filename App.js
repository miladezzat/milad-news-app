import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import NewsDetailPage from './NewsDetail';
import AboutPage from './About';
import QuotePage from './Quote';
import CatalogPage from './Catalog';
import CatalogDetailPage from './CatalogDetail';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        ref={navigationRef}
      >
        <Stack.Navigator
          initialRouteName='MiladNewsApp'          
        >
          <Stack.Screen
            name='MiladNewsApp'
            component={Homepage}
            options={{
              headerMode:'screen',
              header: () => <Header headerDisplay="Milad News App" />
            }}
          />

          <Stack.Screen
            name='NewsDetail'
            component={NewsDetailPage}
            options={{
              headerMode:'screen',
              header: () => <Header headerDisplay="News" />
            }}
          />

          <Stack.Screen
            name='About'
            component={AboutPage}
            options={{
              headerMode:'screen',
              header: () => <Header headerDisplay="About" />
            }}
          />

          <Stack.Screen
            name='Quote'
            component={QuotePage}
            options={{
              headerMode:'screen',
              header: () => <Header headerDisplay="Quote" />
            }}
          />

          <Stack.Screen
            name='Catalog'
            component={CatalogPage}
            options={{
              headerMode:'screen',
              header: () => <Header headerDisplay="Catalog" />
            }}
          />

          <Stack.Screen
            name='CatalogDetail'
            component={CatalogDetailPage}
            options={{
              headerMode:'screen',
              header: () => <Header headerDisplay="Product Information" />
            }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})


