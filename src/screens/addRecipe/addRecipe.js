import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';

const addRecipe = () => {
  //   const [text, onChangeText] = React.useState('Useless Text');
  const [imageURL, onChangeImageURL] = React.useState(null);
  const [recipeTitle, onChangeRecipeTitle] = React.useState(null);
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
        imageURL={onChangeImageURL}
        value={imageURL}
        placeholder="Recipe Image URL"
      />
      <TextInput
        style={styles.input}
        recipeTitle={onChangeRecipeTitle}
        value={recipeTitle}
        placeholder="Recipe Title"
      />
      <TextInput
        style={styles.input}
        recipeDuration={onChangeRecipeDuration}
        value={recipeDuration}
        placeholder="Recipe Duration"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        recipeCategory={onChangeRecipeCategory}
        value={recipeCategory}
        placeholder="Recipe Category"
      />

      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.description}
        recipeDescription={onChangeRecipeDescription}
        value={recipeDescription}
        placeholder="Recipe Description"
      />
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}> Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  description: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default addRecipe;
