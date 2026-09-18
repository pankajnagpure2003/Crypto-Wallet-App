import React, { useState } from "react";
import { View } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../components/ui/Toast";

export default function PersonalInformationScreen({ navigation }) {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    updateUser({ firstName, lastName, email, fullName: `${firstName} ${lastName}` });
    showToast({ title: "Profile updated", variant: "success" });
    navigation.goBack();
  };

  return (
    <Screen scroll>
      <Header title="Personal Information" />
      <View className="mt-2">
        <Input label="First Name" value={firstName} onChangeText={setFirstName} />
        <Input label="Last Name" value={lastName} onChangeText={setLastName} />
        <Input label="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
      </View>
      <Button label="Save Changes" onPress={handleSave} className="mt-4" />
    </Screen>
  );
}
