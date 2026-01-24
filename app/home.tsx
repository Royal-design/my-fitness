import ImageSlider from "@/components/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 p-4">
      <StatusBar style="dark" />
      <View className="flex-row mt-4 justify-between items-center">
        <View>
          <Text className="text-5xl font-bold">READY TO</Text>
          <Text className="text-5xl font-bold text-orange-600">WORKOUT</Text>
        </View>
        <View className="items-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=2" }}
            className="w-16 h-16 rounded-full"
            accessibilityLabel="Avatar"
          />
          <Ionicons
            name="notifications"
            size={32}
            className="rounded-full bg-gray-200 p-2 mt-2"
          />
        </View>
      </View>
      <View className="flex-1">
        <ImageSlider />
      </View>
    </SafeAreaView>
  );
}
