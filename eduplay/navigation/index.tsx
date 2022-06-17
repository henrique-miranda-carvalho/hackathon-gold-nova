/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import UsuarioScreen from '../screens/UsuarioScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import VideosScreen from '../screens/VideosScreen';
import AudiosScreen from '../screens/AudiosScreen';
import TvsScreen from '../screens/TvsScreen';
import RadiosScreen from '../screens/RadiosScreen';
import PodcastsScreen from '../screens/PodcastsScreen';
import VideoScreen from '../screens/VideoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Usuario" component={UsuarioScreen} />
				<Stack.Screen name="Video" component={VideoScreen} initialParams={{videoId: 1}} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Videos"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}>
			<BottomTab.Screen
				name="Videos"
				component={VideosScreen}
				options={({ navigation }: RootTabScreenProps<'Videos'>) => ({
					title: 'Vídeos',
					tabBarIcon: ({ color }) => <FontAwesome name="video-camera" size={30} color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Usuario')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="user-circle-o"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="Audios"
				component={AudiosScreen}
				options={({ navigation }: RootTabScreenProps<'Audios'>) => ({
					title: 'Áudios',
					tabBarIcon: ({ color }) => <MaterialIcons name="multitrack-audio" size={30} color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Usuario')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="user-circle-o"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="Tvs"
				component={TvsScreen}
				options={({ navigation }: RootTabScreenProps<'Tvs'>) => ({
					title: 'TVs',
					tabBarIcon: ({ color }) => <Entypo name="tv" size={30} color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Usuario')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="user-circle-o"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="Radios"
				component={RadiosScreen}
				options={({ navigation }: RootTabScreenProps<'Radios'>) => ({
					title: 'Radios',
					tabBarIcon: ({ color }) => <Entypo name="radio" size={30} color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Usuario')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="user-circle-o"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="Podcasts"
				component={PodcastsScreen}
				options={({ navigation }: RootTabScreenProps<'Podcasts'>) => ({
					title: 'Podcasts',
					tabBarIcon: ({ color }) => <FontAwesome name="podcast" size={30} color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Usuario')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="user-circle-o"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
