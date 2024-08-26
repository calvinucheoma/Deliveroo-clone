import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { forwardRef, useCallback, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();

  const [currentToggle, setCurrentToggle] = useState("delivery");

  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      overDragResistanceFactor={0}
      handleIndicatorStyle={{ display: "none" }}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colors.lightGrey, borderRadius: 0 }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={
              currentToggle === "delivery"
                ? styles.toggleActive
                : styles.toggleInactive
            }
            onPress={() => {
              if (currentToggle === "delivery") return;
              else {
                setCurrentToggle("delivery");
              }
            }}
          >
            <Text
              style={
                currentToggle === "delivery"
                  ? styles.activeText
                  : styles.inactiveText
              }
            >
              Delivery
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              currentToggle === "pickup"
                ? styles.toggleActive
                : styles.toggleInactive
            }
            onPress={() => {
              if (currentToggle === "pickup") return;
              else {
                setCurrentToggle("pickup");
              }
            }}
          >
            <Text
              style={
                currentToggle === "pickup"
                  ? styles.activeText
                  : styles.inactiveText
              }
            >
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>Your Location</Text>

        <Link href={"/(modal)/location-search" as any} asChild>
          <TouchableOpacity onPress={() => dismiss()}>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>Arrival Time</Text>

        <Link href={"/"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="stopwatch-outline"
                size={20}
                color={Colors.medium}
              />
              <Text style={{ flex: 1 }}>Now</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity onPress={() => dismiss()} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  inactiveText: {
    color: Colors.primary,
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    margin: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 0.2,
    marginBottom: 1,
  },
});
