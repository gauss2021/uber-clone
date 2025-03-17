import { SafeAreaView } from "react-native-safe-area-context";

import {Text} from 'react-native';


export default function Login(){

    return <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-center font-semibold text-red-500">Page Login</Text>
    </SafeAreaView>
}