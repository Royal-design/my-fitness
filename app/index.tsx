import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
        }}
        className="w-full h-full"
        resizeMode="cover"
      />
      <View className="px-6 mt-4 w-full flex justify-center items-center absolute bottom-20">
        <Text className="text-3xl font-bold text-orange-400">
          Welcome to MyFitness
        </Text>
        <Text className="mt-2 text-base text-white">
          Track your workouts and stay healthy!
        </Text>
        <TouchableOpacity className="mt-6 rounded-xl bg-orange-500 px-6 py-3 active:opacity-80">
          <Text className="font-semibold text-white">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
