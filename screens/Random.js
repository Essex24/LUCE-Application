import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { useFocusEffect } from '@react-navigation/native';

function RandomScreen({ navigation }) {
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const login = () => {
    fetch('http://loki.lincolnu.edu/~cs451sp23/random.php')
      .then(response => response.json())
      .then(data => {
        setUrl(data.url);
        setImageUrl(data.image_url);
      })
      .catch(error => console.error(error));
  };

  const openUrl = () => {
    Linking.openURL(url);
  };

  useFocusEffect(
    React.useCallback(() => {
      login();
      return () => { };
    }, [])
  );

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <TouchableOpacity onPress={openUrl}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text>{url}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={openUrl}>
          <Image source={require('../assets/stock.png')} style={styles.image} />
          <Text>{url}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default RandomScreen;