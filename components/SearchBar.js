import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const onChangeSearch = async (query) => {
    setSearchQuery(query);
    const response = await fetch(`http://example.com/search.php?query=${query}`);
    const data = await response.json();
    setSearchResults(data);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { Linking.openURL(item.link) }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon="magnify"
        style={{
          borderRadius: 0,
          backgroundColor: '#EFEFEF',
        }}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SearchBar;