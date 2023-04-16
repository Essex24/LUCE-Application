import React from 'react';
import { View, Button, ScrollView, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Aquaculture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Composting</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Hemp Institute</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Horticulture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Innovative Small Farmers Outreach Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Integrated Pest Management Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Paula J. Carter Center on Minority Health and Aging</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Small Ruminant Program</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Wildlife Science</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>Youth Development and 4-H Program</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Digital Resources')}
        style={[
          styles.button,
          Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
        ]}>
          <Text style={styles.buttonText}>AEA</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {

    width: '100%',
  },
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  iosButton: {
    backgroundColor: '#0C2340',
    borderWidth: 1,
    borderColor: 'white',
  },
  androidButton: {
    backgroundColor: '#0C2340',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
