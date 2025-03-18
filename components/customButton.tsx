import { TouchableOpacityProps, ViewProps } from "react-native"
import { TouchableOpacity,Text } from "react-native"

type props = TouchableOpacityProps & {
    text:string,
    IconLeft?:()=>any,
    IconRight?:()=>any,
    className?:string
    textClassName?:string
}

export default function CustomButton({text,IconLeft,IconRight,className,textClassName,...rest}:props){

    return(<TouchableOpacity className={`w-full px-4 py-6 rounded-full shadow-sm text-white flex flex-row justify-center items-center text-ri   ${className}`} {...rest}>
        {IconLeft && <IconLeft />}
        <Text className={`font-JakataExtraBold text-white text-lg ${textClassName}`}>{text}</Text>
        {IconRight && <IconRight />}
    </TouchableOpacity>)
}