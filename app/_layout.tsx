import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ header: () => <CustomHeader /> }}
          />

          <Stack.Screen
            name="(modal)/filter"
            options={{
              presentation: "modal", // does not work on android devices
              animation: "slide_from_bottom",
              animationDuration: 100,
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.lightGrey,
              },
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="(modal)/location-search"
            options={{
              presentation: "fullScreenModal", // does not work on android devices
              animation: "slide_from_bottom",
              animationDuration: 100,
              headerTitle: "Select Location",
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="(modal)/dish"
            options={{
              presentation: "modal", // does not work on android devices
              animation: "slide_from_bottom",
              animationDuration: 100,
              headerTitle: "",
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    padding: 6,
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="basket"
            options={{
              headerTitle: "Basket",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
