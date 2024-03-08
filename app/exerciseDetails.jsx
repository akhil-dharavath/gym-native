import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Anticons from "@expo/vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

const exerciseDetails = () => {
  const router = useRouter();
    const item = useLocalSearchParams();
  //   console.log(item);

  return (
    <View className="flex-1 flex">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ height: wp(100), width: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}
      <ScrollView
        className="mx-2 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Equipment
          <Text className="font-bold text-neutral-800"> {item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles
          <Text className="font-bold text-neutral-800">
            {" "}
            {item?.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Target
          <Text className="font-bold text-neutral-800"> {item?.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Instructions
        </Animated.Text>
        {item.instructions.split(",").map((instruction, index) => (
          <Animated.Text
          entering={FadeInDown.delay((index+5)*100).duration(300).springify()}
            key={instruction}
            style={{ fontSize: hp(1.7) }}
            className="text-neutral-800"
          >
            {instruction}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
