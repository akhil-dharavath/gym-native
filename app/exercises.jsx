import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import ExercisesList from "../components/ExercisesList";
import {ScrollView} from 'react-native-virtualized-view'

const exercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };

  useEffect(() => {
    if(item) getExercises(item.name);
  }, []);
  // console.log(item);

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        // source={bodyParts[0].image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 rounded-full mx-4 absolute flex justify-center items-center pr-1"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name}
        </Text>
        <ExercisesList data={exercises}/>
      </View>
    </ScrollView>
  );
};

export default exercises;
