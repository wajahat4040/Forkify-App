import React from 'react';
import styles from '../addRecipe/styles';
import { AsyncStorage } from 'react-native';

import recipes from '../../data/dataArrays';
// var fs = require('react-native-fs');

import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
// Storing the Data in Persistant
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    alert('Recipe is Saved!');
  } catch (e) {
    // saving error
  }
};

// Retrieving it

const addRecipe = () => {
  //   const [text, onChangeText] = React.useState('Useless Text');
  const [recipeTitle, onChangeRecipeTitle] = React.useState(null);
  const [imageURL, onChangeImageURL] = React.useState(null);
  const [recipeDuration, onChangeRecipeDuration] = React.useState(null);
  const [recipeCategory, onChangeRecipeCategory] = React.useState(null);
  const [recipeDescription, onChangeRecipeDescription] = React.useState(null);
  return (
    <SafeAreaView>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeImageURL}
        placeholder="Recipe Image URL"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeRecipeTitle}
        placeholder="Recipe Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeRecipeDuration}
        placeholder="Recipe Duration"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeRecipeCategory}
        placeholder="Recipe Category"
      />

      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.description}
        onChangeText={onChangeRecipeDescription}
        placeholder="Recipe Description"
      />
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => {
          var obj = {};
          obj['recipeId'] = 10;
          obj['categoryId'] = 3;
          obj['title'] = `${recipeTitle}`;
          obj['photo_url'] = `${imageURL}`;
          obj['time'] = `${recipeDuration}`;
          obj['description'] = `${recipeDescription}`;
          storeData(obj);

          //   const formData = {
          //     recipeId: 10,
          //     categoryId: 3,
          //     title: `${recipeTitle}`,
          //     photo_url: `${imageURL}`,
          //     time: `${recipeDuration}`,
          //     description: `${recipeDescription}`,
          //   };
        }}
      >
        <Text style={styles.appButtonText}> Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default addRecipe;
