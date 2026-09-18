import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";

const TYPE_CONFIG = {
  deposit: { icon: "arrow-down-left", color: "#75BF72", bg: "#E9F6E8", label: "Deposited" },
  withdraw: { icon: "arrow-up-right", color: "#DF5060", bg: "#FBEAEC", label: "Withdrawn" },
  send: { icon: "arrow-up-right", color: "#347AF0", bg: "#EAF1FE", label: "Sent" },
  exchange: { icon: "repeat", color: "#FDB32A", bg: "#FFF6E3", label: "Exchanged" },
};

const STATUS_CONFIG = {
  confirmed: { color: "#347AF0", label: "Transaction confirmed" },
  pending: { color: "#FDB32A", label: "Transaction pending" },
  rejected: { color: "#DF5060", label: "Transaction rejected" },
};

/**
 * Single, prop-driven screen covering all "Transaction Details/*" variants
 * from the kit (Withdrawal / Deposit / Send / Exchange × confirmed / pending
 * / rejected) instead of duplicating near-identical screens per state.
 */
export default function TransactionDetailsScreen({ navigation, route }) {
  const { tx } = route.params;
  const cfg = TYPE_CONFIG[tx.type] || TYPE_CONFIG.deposit;
  const status = STATUS_CONFIG[tx.status] || STATUS_CONFIG.confirmed;

  return (
    <Screen scroll>
      <Header title="Transaction Details" />

      <View className="items-center mb-6">
        <View
          style={{ backgroundColor: cfg.bg }}
          className="w-16 h-16 rounded-full items-center justify-center mb-3"
        >
          <Feather name={cfg.icon} size={26} color={cfg.color} />
        </View>
        <Text style={{ color: cfg.color }} className="text-sublime">
          {cfg.label}
        </Text>
      </View>

      <View className="flex-row justify-between mb-6">
        <Field label="Date" value={tx.date} />
        <Field label="Time" value="11:38 AM" align="right" />
      </View>

      <Divider />
      <Field label="Total amount" value={`${tx.amount} ${tx.symbol}`} block />
      <Field label="Total amount ($)" value={`$${tx.amountUsd}`} block />
      <Field label={tx.type === "withdraw" ? "Withdraw fee" : "Network fee"} value={`0.0015 ${tx.symbol}`} block />

      <View className="mb-4">
        <Text className="text-fineprint text-gray mb-1">Status</Text>
        <View className="flex-row items-center">
          <Text style={{ color: status.color }} className="text-link">
            {status.label}
          </Text>
          <Feather name="external-link" size={14} color={status.color} style={{ marginLeft: 6 }} />
        </View>
      </View>

      <Divider />

      <Field label="Transaction ID" value="3M8w2knJKsr3jqMatYiyuraxVvZA" block />
      <Field label="From" value="0x0b06d4JH48e5DK3jm4a3af69BnVO51c12i8" block wrap />
      <Field label="To" value="3M8w2knJKsr3jqM3aatYiyuraxVvZAmuZ24lK8" block wrap />

      <Button label="Back to Wallet" onPress={() => navigation.navigate("Main")} className="mt-4 mb-4" />
    </Screen>
  );
}

function Field({ label, value, align = "left", block = false, wrap = false }) {
  return (
    <View className={block ? "mb-4" : ""} style={!block ? { flex: 1 } : undefined}>
      <Text className="text-fineprint text-gray mb-1" style={{ textAlign: align }}>
        {label}
      </Text>
      <Text
        className={`text-paragraph text-midnight ${wrap ? "" : ""}`}
        style={{ textAlign: align }}
      >
        {value}
      </Text>
    </View>
  );
}

function Divider() {
  return <View className="h-px bg-border mb-4" />;
}
