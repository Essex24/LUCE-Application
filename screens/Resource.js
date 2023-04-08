import React from 'react';
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

function ResourceScreen() {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() =>  Linking.openURL('https://www.lincolnu.edu/_images/lu_map_updated22-1.pdf')}>
          <Image
            style={styles.logo}
            source={require('../assets/lu.png')}
          />
      </TouchableHighlight>
    </View>
  );
}

export default ResourceScreen;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
});