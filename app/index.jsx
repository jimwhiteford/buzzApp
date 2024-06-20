import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className="flex-row items-center">
            <Image
              source={images.hLogo}
              className="w-[105px] h-[60px] -mr-6"
              resizeMode="contain"
            />
            <Text className="text-white text-5xl font-bold">Buzz</Text>
          </View>
          <Image
            source={images.beePhoto1}
            className="w-[480px] h-[300px] "
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Effortless Apiary Managment with{" "}
              <Text className="text-secondary-200">Buzz</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-1.5 right-24"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Technology meets tradition: An easy to use QR code scanning
            system to track and manage your hives.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
