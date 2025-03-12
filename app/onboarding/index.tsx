import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboading() {
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>First Screen</Text>
    </SafeAreaView>
  );
}
