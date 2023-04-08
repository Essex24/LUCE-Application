import React from 'react';
import { View, Text } from 'react-native';

function ContactUsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20}}>Our Story</Text>
      <Text>Contact Us</Text>
    </View>
  );
}

export default ContactUsScreen;