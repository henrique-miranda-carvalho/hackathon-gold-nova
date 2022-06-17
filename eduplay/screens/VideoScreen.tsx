import { TabRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Image } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Video, AVPlaybackStatus } from "expo-av";
import * as React from 'react';

export default function VideoScreen({ route, navigation }: RootStackScreenProps<'Video'>) {
	const video = React.useRef(null);
	const [showDescription, setShowDescription] = React.useState(false);
	return (
		<View style={styles.container}>
			<Video
				ref={video}
				style={styles.video}
				source={require('../assets/videos/video1.mp4')}
				useNativeControls
				resizeMode={'contain'}
			/>
			<Pressable
					onPress={() => {setShowDescription(!showDescription)}}
					style={styles.inline}
				>
				<Text style={styles.title}>RECEBEMOS UMA LIGAÇÃO DO SETEALEM !!</Text>
				<FontAwesome name={ showDescription ? 'angle-up' : 'angle-down'} size={30} style={styles.showDescription} />
			</Pressable>
			<Pressable
				onPress={() => {navigation.navigate('Channel', {
					channelId: 1,
				})}}
				style={styles.channel}
			>
				<Image
					style={styles.channelIcon}
					source={require('../assets/images/thumbnail.jpg')}
				/>
				<Text style={styles.channelName}>Você Sabia</Text>
			</Pressable>
			{ showDescription &&
				<Text style={styles.description}>A suite VLibras é um conjunto de ferramentas gratuitas e de código aberto que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras, tornando computadores, celulares e plataformas Web mais acessíveis para as pessoas surdas.</Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inline: {
		flexDirection:'row',
		flexWrap:'wrap',
	},
	title: {
		margin: 10,
		fontSize: 20,
		fontWeight: 'bold',
		width: '80%',
	},
	showDescription: {
		margin: 10,
		color: '#999'
	},
	description: {
		margin: 10,
		fontSize: 16,
	},
	video: {
		alignSelf: 'center',
		width: '100%',
		height: 230,
	},
	channel: {
		flexDirection:'row',
		flexWrap:'wrap',
		margin: 10,
	},	
	channelName: {
		margin: 10,
		fontSize: 18,
		width: '80%',
	},
	channelIcon: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
});
