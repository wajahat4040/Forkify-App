// import React from 'react';
// import styles from '../savedRecipes/styles';
// import { AsyncStorage } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// import recipes from '../../data/dataArrays';
// // var fs = require('react-native-fs');

// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   Button,
//   Alert,
//   TouchableOpacity,
//   Text,
//   View,
//   FlatList,
//   Image,
// } from 'react-native';
// // Storing the Data in Persistant
// // Retrieving it
// const getData = async () => {
//   try {
//     const item = await AsyncStorage.getItem('@storage_Key');
//     const parsedItem = JSON.parse(item);
//     console.log(parsedItem);
//   } catch (e) {
//     // error reading item
//   }
// };
// const savedRecipes = (item) => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.appButtonContainer}
//           onPress={() => {
//             getData();
//           }}
//         >
//           <Text style={styles.appButtonText}> View Saved Recipes</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default savedRecipes;
import React, { useLayoutEffect } from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/savedRecipes';
import MenuImage from '../../components/MenuImage/MenuImage';

import { getCategoryName } from '../../data/MockDataAPI';

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate('Recipe', { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
