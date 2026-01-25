import React from "react";
import { Dimensions, Image } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const sliderImages = [
  {
    title: "Slide 1",
    uri: "https://images.unsplash.com/photo-1584797079913-f5408e4a5fcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpdG5lc3NzfGVufDB8fDB8fHww",
  },
  {
    title: "Slide 2",
    uri: "https://plus.unsplash.com/premium_photo-1664299208816-ef56887db111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Slide 3",
    uri: "https://images.unsplash.com/photo-1653276527526-f902a569d3c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpdG5lc3NzJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Slide 4",
    uri: "https://plus.unsplash.com/premium_photo-1664298341091-9281d574b0f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3MlMjBtYWxlfGVufDB8fDB8fHww",
  },
];

const { width: screenWidth } = Dimensions.get("window");
const ITEM_SPACING = 10;
const ITEM_WIDTH = screenWidth - ITEM_SPACING * 2;
const ITEM_HEIGHT = 200;

export default function ImageSlider() {
  const progress = useSharedValue(0);

  return (
    <Carousel
      width={ITEM_WIDTH}
      height={ITEM_HEIGHT}
      data={sliderImages}
      autoPlay
      snapEnabled={true}
      mode="parallax"
      modeConfig={{ parallaxScrollingScale: 0.9, parallaxScrollingOffset: 50 }}
      loop
      pagingEnabled={true}
      onProgressChange={(absoluteProgress) => {
        progress.value = absoluteProgress;
      }}
      style={{ width: screenWidth }}
      renderItem={({ item }) => <ItemCard item={item} />}
    />
  );
}

type ItemCardProps = {
  item: (typeof sliderImages)[0];
};

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        paddingHorizontal: ITEM_SPACING / 2,
      }}
    >
      <Image
        source={{ uri: item.uri }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
        className="rounded-[30px]"
      />
    </Animated.View>
  );
};
