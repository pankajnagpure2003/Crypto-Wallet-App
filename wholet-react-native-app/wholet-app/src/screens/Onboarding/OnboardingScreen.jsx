import React, { useRef, useState } from "react";
import { View, Text, FlatList, useWindowDimensions, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/ui/Button";

const STEPS = [
  {
    icon: "shield",
    title: "Bank-Grade Security",
    body: "Your keys, your crypto. Industry-leading encryption keeps your assets safe.",
  },
  {
    icon: "trending-up",
    title: "Track Every Asset",
    body: "Follow real-time prices and portfolio performance across every coin you hold.",
  },
  {
    icon: "send",
    title: "Send & Exchange Instantly",
    body: "Move funds between wallets or exchange coins in just a few taps.",
  },
];

export default function OnboardingScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const listRef = useRef(null);

  const goNext = () => {
    if (index < STEPS.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1 });
    } else {
      navigation.replace("Welcome");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Pressable
        onPress={() => navigation.replace("Welcome")}
        className="self-end mr-6 mt-2"
      >
        <Text className="text-paragraph text-white/80">Skip</Text>
      </Pressable>

      <FlatList
        ref={listRef}
        data={STEPS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => String(i)}
        onMomentumScrollEnd={(e) => {
          setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item }) => (
          <View style={{ width }} className="items-center justify-center px-10">
            <View className="w-28 h-28 rounded-full border-2 border-white/40 items-center justify-center mb-10">
              <Feather name={item.icon} size={48} color="#FFFFFF" />
            </View>
            <Text className="text-h2 text-white text-center mb-3">{item.title}</Text>
            <Text className="text-paragraph text-white/70 text-center">{item.body}</Text>
          </View>
        )}
      />

      <View className="flex-row justify-center mb-8" style={{ gap: 8 }}>
        {STEPS.map((_, i) => (
          <View
            key={i}
            className="h-1.5 rounded-full bg-white"
            style={{ width: i === index ? 24 : 8, opacity: i === index ? 1 : 0.4 }}
          />
        ))}
      </View>

      <View className="px-6 pb-6">
        <Button
          label={index === STEPS.length - 1 ? "Get Started" : "Next"}
          variant="primaryWhite"
          onPress={goNext}
        />
      </View>
    </SafeAreaView>
  );
}
