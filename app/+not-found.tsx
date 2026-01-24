import React from "react";
import { Pressable, Text, View } from "react-native";

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-6xl font-bold text-black">404</Text>
      <Text className="mt-2 text-xl font-semibold text-black">
        Page not found
      </Text>

      <Text className="mt-3 text-center text-sm text-gray-500">
        The screen you’re looking for doesn’t exist.
      </Text>

      <Pressable className="mt-6 rounded-xl bg-black px-6 py-3 active:opacity-80">
        <Text className="font-semibold text-white">Go back</Text>
      </Pressable>
    </View>
  );
}
