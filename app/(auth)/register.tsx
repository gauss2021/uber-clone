import CustomButton from '@/components/customButton';
import InputField from '@/components/inputFields';
import { useState } from 'react';
import {Text,ScrollView,View,Image} from 'react-native';


export default function Register(){

    const [form,setForm]=useState({
        name:'',
        email:'',
        password:''
    });

    const register= async()=>{
        console.log("S'enregistrer---",form);
    }

    return(<ScrollView className='flex-1 bg-white'>
        <View className='relative h-[250px] w-full'>
            <Image source={require('@/assets/images/signup-car.png')} className='h-full w-full' />
            <Text className='font-JakataBold text-2xl absolute left-5 bottom-10 uppercase'>Creer votre compte</Text>
        </View>
        <View className='gap-3 px-5'>
            <InputField secureTextEntry={false} icon={require("@/assets/icons/person.png")} onChangeText={(value)=>{setForm({...form,name:value})} }  label='Nom' placeholder='Entrer votre nom'/>
            <InputField secureTextEntry={false} icon={require("@/assets/icons/email.png")} onChangeText={(value)=>{setForm({...form,email:value})} }  label='Email' placeholder='Entrer votre adresse email '/>
            <InputField secureTextEntry={true} icon={require("@/assets/icons/lock.png")} onChangeText={(value)=>{setForm({...form,password:value})} }  label='Mot de passe' placeholder='Entrer votre mot de passe'/>
        </View>
        <View className='mt-5 px-5'>
        <CustomButton text="S'enregistrer" className='bg-primary-500' onPress={()=>{register()}} />
        </View>
        
    </ScrollView>)  
}