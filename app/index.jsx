import { StatusBar } from 'expo-status-bar';
import {  ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="flex-row items-center">
            <Image source={images.hLogo} className="w-[105px] h-[60px] -mr-6" resizeMode='contain' />
            <Text className="text-white text-5xl font-semibold">Buzz</Text>
          </View>
          
          <Image source={images.cards} className="w-[380px] h-[300px]" resizeMode='contain' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

