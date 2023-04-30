import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
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
  );
};

export default SearchBar;