import '../global.ts'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput } from 'react-native';
import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

function EmailScreen({ route, navigation }: RootStackScreenProps<'Email'>) {
  const [email, onChangeEmail] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>E-mail</Text>
      <TextInput
        textContentType='emailAddress'
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Insira seu e-mail"
        autoFocus={true}
        onSubmitEditing = {() => (navigation.navigate('Senha'))}
      />
    </View>
  );
}
function SenhaScreen({ route, navigation }: RootStackScreenProps<'Senha'>) {
  const [senha, onChangeSenha] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Senha</Text>
      <TextInput
        textContentType='password'
        style={styles.input}
        onChangeText={onChangeSenha}
        value={senha}
        placeholder="Insira sua senha"
        autoFocus={true}
        onSubmitEditing = {() => {
          (global as any).logado = true;
          navigation.navigate('Videos');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    textAlign: 'left',
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
  },
});

export {EmailScreen, SenhaScreen}