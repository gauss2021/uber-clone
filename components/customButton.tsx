import { ViewProps } from "react-native"
import { TouchableOpacity,Text } from "react-native"

type props = ViewProps & {

    text:string,
    IconLeft?:()=>any,
    IconRight?:()=>any,
    onPress:()=>void,
    className?:string
    textClassName?:string
}

export default function CustomButton({text,IconLeft,IconRight,className,onPress,textClassName,...rest}:props){

    return(<TouchableOpacity onPress={onPress} className={`w-full px-4 py-6 rounded-full shadow-sm text-white flex flex-row justify-center items-center   ${className}`} {...rest}>
        {IconLeft && <IconLeft />}
        <Text className={`font-JakataExtraBold text-white text-lg ${textClassName}`}>{text}</Text>
        {IconRight && <IconRight />}
    </TouchableOpacity>)
}