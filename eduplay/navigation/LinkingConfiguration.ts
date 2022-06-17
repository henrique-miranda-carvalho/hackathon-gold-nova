/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Videos: {
            screens: {
              VideoScreen: 'video',
            },
          },
          Audios: {
            screens: {
              AudiosScreen: 'audio',
            },
          },
          Tvs: {
            screens: {
              TvsScreen: 'tvs',
            },
          },
          Radios: {
            screens: {
              TvsScreen: 'radios',
            },
          },
          Podcasts: {
            screens: {
              TvsScreen: 'podcasts',
            },
          },
        },
      },
      Video: 'video',
      Channel: 'channel',
      Usuario: 'usuario',
      NotFound: '*',
    },
  },
};

export default linking;
