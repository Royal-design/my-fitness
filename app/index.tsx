import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
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

      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "transparent"]}
        className="absolute inset-0"
      />

      <View className="px-6 mt-4 w-full flex justify-center items-center absolute bottom-20">
        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <Text className="text-4xl text-center font-bold text-orange-400">
            Welcome to MyFitness
          </Text>
          <Text className="mt-2 text-base text-white text-center">
            Track your workouts and stay healthy!
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200)}
          className="max-w-[80%] w-full justify-center"
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/home")}
            className="mt-6 rounded-full  bg-orange-500 px-6 py-3 active:opacity-80"
          >
            <Text className="font-semibold text-center text-xl text-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
