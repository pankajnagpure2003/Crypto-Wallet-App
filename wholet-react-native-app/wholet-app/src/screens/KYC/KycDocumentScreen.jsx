import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import ProgressBar from "../../components/ui/ProgressBar";
import Button from "../../components/ui/Button";
import { useToast } from "../../components/ui/Toast";

const STEPS = [
  { key: "front", label: "Scan the front of your ID" },
  { key: "back", label: "Scan the back of your ID" },
  { key: "selfie", label: "Take a quick selfie" },
];

/**
 * Mirrors "KYC/Step 2/Document Verification/Scan Front Side.jpg" — a
 * 3-step document capture flow (front / back / selfie).
 */
export default function KycDocumentScreen({ navigation }) {
  const [step, setStep] = useState(1);
  const { showToast } = useToast();
  const current = STEPS[step - 1];

  const handleCapture = () => {
    if (step < STEPS.length) {
      setStep((s) => s + 1);
    } else {
      showToast({
        title: "Verification submitted",
        message: "We'll review your documents shortly.",
        variant: "info",
      });
      navigation.navigate("Main");
    }
  };

  return (
    <Screen>
      <Header title="Document Verification" />
      <ProgressBar step={step} total={STEPS.length} />

      <View className="flex-1 items-center justify-center">
        <View
          className="w-full border-2 border-dashed border-primary rounded-2xl items-center justify-center mb-8"
          style={{ height: 220 }}
        >
          <Feather name="camera" size={36} color="#347AF0" />
          <Text className="text-paragraph text-primary mt-3">{current.label}</Text>
        </View>
        <Text className="text-fineprint text-gray text-center px-6">
          Make sure the document is well-lit and all four corners are visible in frame.
        </Text>
      </View>

      <Button label={step < STEPS.length ? "Capture & Continue" : "Submit Verification"} onPress={handleCapture} className="mb-4" />
    </Screen>
  );
}
