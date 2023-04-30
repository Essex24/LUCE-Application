import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { useFocusEffect } from '@react-navigation/native';

function ResourceScreen({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://loki.lincolnu.edu/~cs451sp23/category_scripts/get_unit_18.php')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const displayData = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.resource}>
        {item.DR_IMAGE ? (
          <TouchableOpacity onPress={() => Linking.openURL(item.DR_URL)}>
            <Image source={{ uri: item.DR_IMAGE }} style={styles.image}/>
            <Text style={styles.linkText} onPress={() => Linking.openURL(item.DR_URL)}>{item.DR_URL}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => Linking.openURL(item.DR_URL)}>
            <Image source={require('../assets/stock.png')} style={styles.image} />
            <Text style={styles.linkText} onPress={() => Linking.openURL(item.DR_URL)}>{item.DR_URL}</Text>
          </TouchableOpacity>
        )}
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.length ? (
        displayData()
      ) : (
        <Text>Loading data...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  resource: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ResourceScreen;