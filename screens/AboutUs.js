import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutUsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Contact Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutUsScreen;