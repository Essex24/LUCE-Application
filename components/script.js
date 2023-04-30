import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function Myscript() {
  const [data, setData] = useState(null);

  // Fetch the data when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch the data when the component is focused (navigated to)
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  // Function to fetch the data
  const fetchData = () => {
    fetch('http://example.com/my-script.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      {data ? (
        <Text>{data.message}</Text>
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Myscript;