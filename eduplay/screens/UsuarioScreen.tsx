import '../global.ts'
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable, Image } from 'react-native';
import * as React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function UsuarioScreen({ route, navigation }: RootStackScreenProps<'Usuario'>) {
  return (
    <View style={styles.container}>
      {(global as any).logado &&
        <View>
          <View style={styles.user}>
            <Image
              style={styles.userIcon}
              source={require('../assets/images/placeholder.png')}
            />
            <Text style={styles.userName}>Usuário Exemplo</Text>
          </View>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Pressable>
            <Text style={styles.option}>Conta</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.option}>Seu Canal</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              (global as any).logado = false;
              navigation.navigate('Videos');
            }}
          >
            <Text style={styles.option}>Sair</Text>
          </Pressable>
        </View>
      }
      {!(global as any).logado &&
        <View>
          <Pressable
            onPress={() => {navigation.navigate("Email")}}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Text style={styles.option}>Entrar</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.option}>Criar Conta</Text>
          </Pressable>
        </View>
      }
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable>
        <Text style={styles.option}>Configurações</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.option}>Acessibilidade</Text>
      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Pressable>
        <Text style={styles.option}>Sobre</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.option}>Termos de Uso</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    fontSize: 18,
    margin: 10
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  user: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  userName: {
    margin: 10,
    fontSize: 18,
    width: '80%',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
