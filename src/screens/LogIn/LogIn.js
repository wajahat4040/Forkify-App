import React from 'react';
import styles from '../LogIn/styles';
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

const LogIn = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [recipeTitle, onChangeRecipeTitle] = React.useState(null);
  const [imageURL, onChangeImageURL] = React.useState(null);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeImageURL}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeRecipeTitle}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.appButtonContainer} onPress={() => {}}>
        <Text style={styles.appButtonText}> Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LogIn;
