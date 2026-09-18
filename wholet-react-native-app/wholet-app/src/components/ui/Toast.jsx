import React, { createContext, useCallback, useContext, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ToastContext = createContext(null);

const VARIANTS = {
  success: { icon: "check-circle", color: "#75BF72", bg: "#E9F6E8" },
  error: { icon: "x-circle", color: "#DF5060", bg: "#FBEAEC" },
  info: { icon: "info", color: "#347AF0", bg: "#EAF1FE" },
};

/**
 * Global toast provider. Mirrors "Toast Notifications.png": success /
 * rejected states for withdrawals, verification, password/PIN changes, etc.
 *
 * Usage: const { showToast } = useToast();
 *        showToast({ title: "Withdrawal successful", variant: "success" })
 */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const timerRef = useRef(null);

  const showToast = useCallback(({ title, message, variant = "success", duration = 2600 }) => {
    setToast({ title, message, variant });
    Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }).start();

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(() =>
        setToast(null)
      );
    }, duration);
  }, [opacity]);

  const config = toast ? VARIANTS[toast.variant] : null;

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast ? (
        <SafeAreaView pointerEvents="none" className="absolute top-0 left-0 right-0 px-4">
          <Animated.View
            style={{ opacity, backgroundColor: "#0D1F3C" }}
            className="mt-2 rounded-2xl px-4 py-3.5 flex-row items-center shadow-lg"
          >
            <View
              style={{ backgroundColor: config.bg }}
              className="w-8 h-8 rounded-full items-center justify-center mr-3"
            >
              <Feather name={config.icon} size={16} color={config.color} />
            </View>
            <View className="flex-1">
              <Text className="text-white text-link">{toast.title}</Text>
              {toast.message ? (
                <Text className="text-fineprint text-gray-light mt-0.5">{toast.message}</Text>
              ) : null}
            </View>
          </Animated.View>
        </SafeAreaView>
      ) : null}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
};
