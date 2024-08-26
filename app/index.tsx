import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Colors from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Categories />

        <Text style={styles.header}>Top picks in your neighborhood</Text>

        <Restaurants />

        <Text style={styles.header}>Offers near you</Text>

        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 80,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default HomePage;
