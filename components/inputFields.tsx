import { KeyboardAvoidingView, TouchableWithoutFeedback, View,Text, ViewProps,Image,ImageSourcePropType,TextInput, TextProps, Platform, Keyboard, TextInputProps } from "react-native";

type Props =TextInputProps & {
    labelStyle?: string,
    label:string,
    placeholder:string,
    icon: ImageSourcePropType | undefined,
    iconStyle?:string,
    inputStyle?:string,
    secureTextEntry:boolean,
    containerStyle?:string
    onChangeText:(value:string)=>any

}

export default function InputField({labelStyle,label,icon,iconStyle,inputStyle,containerStyle,...rest}:Props){

    return(
        <KeyboardAvoidingView behavior={Platform.OS==='ios'? "padding":'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
               <View className='w-full'>
                    <Text className={`text-lg font-JakataSemiBold ${labelStyle}`}>{label}</Text>
                    <View
                        className={`mt-2 flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500   ${containerStyle}`}
                    >
                        {icon && (
                            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`}/>
                        )}
                        <TextInput
                            className={`rounded-full p-4 text-[15px] flex-1 text-left font-JakataSemiBold ${inputStyle}`}
                            {...rest}
                        />
                    </View>

                </View> 
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}