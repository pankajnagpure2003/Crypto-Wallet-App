import React, { useMemo, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";
import CoinIcon from "../../components/wallet/CoinIcon";
import { mockAssets } from "../../data/mockData";
import { useToast } from "../../components/ui/Toast";

// Rough demo conversion rates against USD, for illustration only.
const RATES = { BTC: 9460, ETH: 227.7, LTC: 55.5, XRP: 0.51, XLM: 0.123 };

export default function ExchangeScreen({ navigation }) {
  const [fromSymbol, setFromSymbol] = useState("BTC");
  const [toSymbol, setToSymbol] = useState("ETH");
  const [amount, setAmount] = useState("");
  const { showToast } = useToast();

  const converted = useMemo(() => {
    if (!amount) return "0.00";
    const usd = Number(amount) * (RATES[fromSymbol] || 1);
    return (usd / (RATES[toSymbol] || 1)).toFixed(6);
  }, [amount, fromSymbol, toSymbol]);

  const swap = () => {
    setFromSymbol(toSymbol);
    setToSymbol(fromSymbol);
  };

  const handleExchange = () => {
    showToast({
      title: "Exchange complete",
      message: `${amount} ${fromSymbol} → ${converted} ${toSymbol}`,
      variant: "success",
    });
    navigation.navigate("Main");
  };

  return (
    <Screen scroll>
      <Header title="Exchange" />

      <Text className="text-fineprint text-gray mb-2">From</Text>
      <CoinRow
        symbol={fromSymbol}
        onChangeSymbol={setFromSymbol}
        exclude={toSymbol}
        amount={amount}
        onChangeAmount={setAmount}
        editable
      />

      <Pressable onPress={swap} className="self-center my-4 w-11 h-11 rounded-full bg-primary-light items-center justify-center">
        <Feather name="repeat" size={18} color="#347AF0" />
      </Pressable>

      <Text className="text-fineprint text-gray mb-2">To</Text>
      <CoinRow symbol={toSymbol} onChangeSymbol={setToSymbol} exclude={fromSymbol} amount={converted} editable={false} />

      <View className="bg-surface rounded-2xl p-4 my-8">
        <View className="flex-row justify-between">
          <Text className="text-fineprint text-gray">Exchange rate</Text>
          <Text className="text-fineprint text-midnight">
            1 {fromSymbol} ≈ {((RATES[fromSymbol] || 1) / (RATES[toSymbol] || 1)).toFixed(4)} {toSymbol}
          </Text>
        </View>
      </View>

      <Button label="Exchange" disabled={!amount} onPress={handleExchange} />
    </Screen>
  );
}

function CoinRow({ symbol, onChangeSymbol, exclude, amount, onChangeAmount, editable }) {
  const [open, setOpen] = useState(false);

  return (
    <View className="bg-white border border-border rounded-2xl p-4 mb-1">
      <View className="flex-row items-center justify-between">
        <Pressable onPress={() => setOpen((o) => !o)} className="flex-row items-center">
          <CoinIcon symbol={symbol} size={28} />
          <Text className="text-link text-midnight ml-2">{symbol}</Text>
          <Feather name="chevron-down" size={16} color="#B5BBC9" style={{ marginLeft: 4 }} />
        </Pressable>
        <TextInput
          value={String(amount)}
          onChangeText={onChangeAmount}
          editable={editable}
          keyboardType="decimal-pad"
          placeholder="0.00"
          placeholderTextColor="#CFD2D8"
          className="text-h3 text-midnight text-right flex-1 ml-3"
        />
      </View>

      {open ? (
        <View className="mt-3 border-t border-border pt-3">
          {mockAssets
            .filter((a) => a.symbol !== exclude)
            .map((a) => (
              <Pressable
                key={a.symbol}
                onPress={() => {
                  onChangeSymbol(a.symbol);
                  setOpen(false);
                }}
                className="flex-row items-center py-2"
              >
                <CoinIcon symbol={a.symbol} size={24} />
                <Text className="text-paragraph text-midnight ml-2">{a.symbol}</Text>
              </Pressable>
            ))}
        </View>
      ) : null}
    </View>
  );
}
