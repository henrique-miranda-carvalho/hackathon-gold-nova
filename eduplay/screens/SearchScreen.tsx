import '../global.ts'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Appearance } from 'react-native';
import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function SearchScreen({ route, navigation }: RootStackScreenProps<'Usuario'>) {
    const [search, onChangeSearch] = React.useState('');
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSearch}
          value={search}
          placeholder="Pesquisar"
          autoFocus={true}
          onSubmitEditing = {() => {}}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    input: {
      fontSize: 20,
      height: 50,
      width: '90%', 
      margin: 12, 
      borderWidth: 1, 
      padding: 10, 
      borderColor: '#999', 
      borderRadius: 10,
      color: Appearance.getColorScheme() == "dark" ? 'white' : 'black',
    },
  });