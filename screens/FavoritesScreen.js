import React from "react";

import HeaderButtons from "../components/HeaderButtons";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");

  React.useEffect(() => {
    props.navigation.dispatch(DrawerActions.closeDrawer())
  })
  return (
    <SafeAreaProvider style={styles.container}>
      <Header
      backgroundColor="white"
      centerComponent={{ text: 'Favourite', style: styles.heading }}
      
      />
      <MealList listData={favMeals} navigation={props.navigation} />
      </SafeAreaProvider>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} />,
  };
};

export default FavoritesScreen;

const styles = StyleSheet.create({
 heading:{
   fontFamily: 'open-sans-bold',
   fontSize: 20
 }
});
