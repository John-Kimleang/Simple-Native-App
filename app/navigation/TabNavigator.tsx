import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AudioBookScreen from "../screens/audios/AudioBookScreen";
import BookScreen from "../screens/books/BookScreen";
import CartScreen from "../screens/cart/CartScreen";
import PaymentScreen from "../screens/cart/PaymentScreen";
import HomeScreen from "../screens/home/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"];
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AudioBook") {
            iconName = focused ? "musical-notes" : "musical-notes-outline";
          } else if (route.name === "Book") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Bookmark") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else {
            iconName = "ellipse"; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray", 
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AudioBook" component={AudioBookScreen} />
      <Tab.Screen name="Book" component={BookScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Bookmark" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;