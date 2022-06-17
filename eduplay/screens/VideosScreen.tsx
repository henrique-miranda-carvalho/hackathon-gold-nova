import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Image, ScrollView, Pressable } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function VideosScreen({ navigation }: RootTabScreenProps<'Videos'>) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<Pressable
					onPress={() => {navigation.navigate('Video', {
						videoId: 1,
					})}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/thumbnail.jpg')}
					/>
					<Text style={styles.title}>RECEBEMOS UMA LIGAÇÃO DO SETEALEM !!</Text>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</Pressable>
				<Pressable
					onPress={() => {navigation.navigate('Video', {
						videoId: 2,
					})}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/thumbnail2.jpg')}
					/>
					<Text style={styles.title}>OLHO DE DEUS FOI ENCONTRADO NO UNIVERSO !!</Text>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</Pressable>
				<Pressable
					onPress={() => {navigation.navigate('Video', {
						videoId: 3,
					})}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/thumbnail3.jpg')}
					/>
					<Text style={styles.title}>Como funciona o AKINATOR ? O GÊNIO da internet</Text>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</Pressable>
			</ScrollView>
			{/* <Text style={styles.title}>Vídeos</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="/screens/VideosScreen.tsx" /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//alignItems: 'center',
		//justifyContent: 'center',
	},
	title: {
		margin: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 10,
		height: 1,
		width: '100%',
	},
	cardBackground: {
		flex: 1,
	},
	cardImage: {
		width: '100%',
		height: 210,
	},
});
