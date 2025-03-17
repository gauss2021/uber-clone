import { Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import 'react-native-reanimated';





SplashScreen.preventAutoHideAsync();
export default function RootLayout() {

  const [loaded]= useFonts(
    {
      "jakarta-semi-bold": require('./../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
      "jakarta-regular": require('./../assets/fonts/PlusJakartaSans-Regular.ttf'),
      "jakarta-medium": require('./../assets/fonts/PlusJakartaSans-Medium.ttf'),
      "jakarta-light": require('./../assets/fonts/PlusJakartaSans-Light.ttf'),
      "jakarta-extra-light": require('./../assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
      "jakarta-extra-bold": require('./../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
      "jakarta-bold": require('./../assets/fonts/PlusJakartaSans-Bold.ttf'),
    }
  )

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <Stack screenOptions={{headerShown:false}} />;
}
