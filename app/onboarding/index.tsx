import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import customButton from "@/components/customButton";

import { onbording } from "@/constants";

import Swiper from 'react-native-swiper';
import CustomButton from "@/components/customButton";

export default function Onboading() {
  
  const swiperRef =useRef<Swiper>(null);

  const [index,setIndex]= useState(0);

  const isLastscreen= index===onbording.length-1;

  return (
    <SafeAreaView
    className="flex-1 items-center justify-between px-2 py-6"
    >
      <TouchableOpacity className="self-end" onPress={()=>{
        console.log('On clique sur passé')
        router.replace("/(auth)/login");
      }}>
      <Text className="font-JakataSemiBold">Passer</Text>
      </TouchableOpacity>

      <Swiper ref={swiperRef} loop={false} dot={
       
       <View className="h-1 w-5 mx-1 bg-success-400">

       </View>
      }
      
      activeDot={
       
        <View className="h-1 w-5 mx-1 bg-primary-500">
 
        </View>
       }
      
       onIndexChanged={(index)=>{
        setIndex(index);
       }}
      >
        {onbording?.map((el)=>(
          <View key={el.id} className="flex items-center px-2">
              <Image source={el.image} className="h-[300px] w-full" resizeMode="contain" />
              <Text className="text-2xl text-center font-JakataExtraBold mt-5">{el.title}</Text>
              <Text className="mt-5 text-center text-lg">{el.description}</Text>
          </View>
          ))
        }
        
      </Swiper>
      <CustomButton text={isLastscreen?"Commencer" :"Suivant"} className="bg-primary-500 border-primary-500 text-white" onPress={()=> {
         isLastscreen ? router.replace("/(auth)/login"):swiperRef.current?.scrollBy(1)
        }}/> 
    </SafeAreaView>
  );
}
