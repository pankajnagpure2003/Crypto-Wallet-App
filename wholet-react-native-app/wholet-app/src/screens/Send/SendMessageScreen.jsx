import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";

export default function SendMessageScreen({ navigation, route }) {
  const { symbol, amount, recipient } = route.params;
  const [message, setMessage] = useState("");

  return (
    <Screen scroll>
      <Header title="Add a Message" />

      <View className="bg-surface rounded-2xl p-4 mb-8">
        <Text className="text-fineprint text-gray mb-1">Sending</Text>
        <Text className="text-h3 text-midnight">{amount} {symbol}</Text>
        <Text className="text-fineprint text-gray mt-2">to {recipient}</Text>
      </View>

      <Text className="text-fineprint text-gray mb-1.5">Message (optional)</Text>
      <View className="border border-border rounded-2xl p-4 mb-8" style={{ minHeight: 100 }}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Say something nice..."
          placeholderTextColor="#B5BBC9"
          multiline
          className="text-paragraph text-midnight"
        />
      </View>

      <Button
        label="Send"
        onPress={() =>
          navigation.navigate("EnterPin", {
            onSuccessRoute: "SendSuccess",
            onSuccessParams: { symbol, amount, recipient, message },
          })
        }
      />
    </Screen>
  );
}
