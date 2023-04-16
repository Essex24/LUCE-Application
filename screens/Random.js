import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RandomScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Random</Text>
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

export default RandomScreen;