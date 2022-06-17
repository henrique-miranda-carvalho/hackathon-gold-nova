import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function UsuarioScreen() {
  const [isLogado, setLogado] = React.useState(true)
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
