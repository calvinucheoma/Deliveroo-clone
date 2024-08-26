import { restaurants } from "@/assets/data/home";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 15 }}
    >
      {restaurants.map((restaurant, index) => (
        <Link
          href={"/details" as any}
          style={styles.restaurantCard}
          key={index}
          asChild
        >
          <TouchableOpacity>
            <View style={styles.restaurantCard}>
              <Image source={restaurant.img} style={styles.image} />

              <View style={styles.categoryBox}>
                <Text style={styles.restaurantText}>{restaurant.name}</Text>
                <Text style={{ color: Colors.green }}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text style={{ color: Colors.medium }}>
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  restaurantCard: {
    width: 300,
    height: 250,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  restaurantText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
    alignItems: "center",
  },
  image: { flex: 5, width: undefined, height: undefined },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
});
