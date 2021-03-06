import React from 'react';
import { Alert, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require('../../../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate('Home');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require('../../../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('Categories');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require('../../../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('Search');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Add Recipe"
          source={require('../../../assets/icons/addRecipe.png')}
          onPress={() => {
            navigation.navigate('Add Recipe');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Saved Recipes"
          source={require('../../../assets/icons/savedRecipe.png')}
          onPress={() => {
            navigation.navigate('Saved Recipes');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Log In"
          source={require('../../../assets/icons/logout.png')}
          onPress={() => {
            navigation.navigate('Log In');
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
