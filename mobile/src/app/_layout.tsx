import '~/styles/global.css'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'

import * as SplashScreen from 'expo-splash-screen'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { theme } from '~/theme'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  } else {
    return
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.colors.gray[600] }}
    >
      <Slot />
      <StatusBar style="light" backgroundColor="transparent" />
    </GestureHandlerRootView>
  )
}
