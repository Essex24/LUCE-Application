import React from 'react';
import { View, Image, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
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
      <TouchableOpacity onPress={this.login} style={styles.button}>
        <Image
            style={styles.logo}
            source={require('../assets/lu.png')}
          />
      </TouchableOpacity>
    </View>
  );
}

login = () => {
//getting the sauce
  fetch('http://loki.lincolnu.edu/~cs451sp23/php_script.php', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        //body: JSON.stringify({
        //  key: 'test',
        //})
    })
  //.then((response) => response.json())
  //.then((res) => {
  //  alert(res.message);
  //})
  .then((reponse) => Response.json())
  .then((reponse) => console.log(reponse))
  .catch((error) => {
    console.error(error);
  });
}

export default ResourceScreen;

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 250,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    padding: 20,
    borderWidth: 1,
  },
});