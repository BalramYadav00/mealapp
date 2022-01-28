import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import { MEALS } from '../data/dummy-data';
import HeaderButtons from '../components/HeaderButtons';
import DefaultText from '../components/DefaultText';

import { AntDesign } from '@expo/vector-icons';

const ListItem = props => {

  

  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {


  const {mealId} = props.route.params;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: 'Filter Meals',
      headerTitleAlign: 'center',
      headerTitle: selectedMeal.title,
    headerRight:() => (
      <AntDesign  name="staro" size={24} color="black" onPress={() => console.log("Mark as fav")} />
    )
    });
  }, [props.navigation]);


  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
