import { TabRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Text, View, Image } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Video, AVPlaybackStatus } from "expo-av";
import * as React from 'react';

export default function VideoScreen({ route, navigation }: RootStackScreenProps<'Video'>) {
	const video = React.useRef(null);
	const [showDescription, setShowDescription] = React.useState(false);
	const [likeOrNot, setLikeOrNot] = React.useState(true);
	return (
		<View style={styles.container}>
			<Video
				ref={video}
				style={styles.video}
				source={require('../assets/videos/video1.mp4')}
				useNativeControls
				resizeMode={'contain'}
			/>
			<View style={styles.inline}>
				<Text style={styles.title}>Recebemos uma LIGAÇÃO do SETEALÉM!</Text>
				<Pressable
						onPress={() => {setShowDescription(!showDescription)}}
						style={styles.inline}
					>
					<FontAwesome name={showDescription ? 'angle-up' : 'angle-down'} size={24} style={styles.showDescription} />
				</Pressable>
			</View>
			<View style={styles.inline}>
				<Text style={styles.views}>160 mil visualizações</Text>
				<Text style={styles.continuity}>•</Text>
				<Text style={styles.continuity}>há 1 hora</Text>
			</View>
			<View style={styles.feedback}>
				<View style={styles.inline}>
					<View style={styles.feedbackLike}>
						<Pressable
							onPress={() => {setLikeOrNot(!likeOrNot)}}>
							<AntDesign style={styles.likeButton} name={likeOrNot ? 'like2' : 'like1'} size={24} color="white"/>
						</Pressable>
						<Text>13 mil</Text>
					</View>
					<View style={styles.feedbackShare}>
						<AntDesign style={styles.shareButton} name="sharealt" size={24} color="white" />
						<Text>Compartilhar</Text>
					</View>
					<View style={styles.feedbackReport}>
						<AntDesign style={styles.reportButton} name="flag" size={24} color="white" />
						<Text>Denunciar</Text>
					</View>
				</View>
			</View>
			{ showDescription &&
				<Text style={styles.description}>A suite VLibras é um conjunto de ferramentas gratuitas e de código aberto que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras, tornando computadores, celulares e plataformas Web mais acessíveis para as pessoas surdas.</Text>
			}
			<Pressable
				onPress={() => {navigation.navigate('Channel', {
					channelId: 1,
				})}}
				style={styles.channel}
			>
				<Image
					style={styles.channelIcon}
					source={require('../assets/images/channelicon.jpg')}
				/>
				<Text style={styles.channelName}>Você Sabia?</Text>
			</Pressable>
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
	feedback: {
		marginLeft: 10
	},
	feedbackLike: {
		marginTop: 20,
		marginLeft: 40
	},
	feedbackShare: {
		marginTop: 20,
		marginLeft: 70
	},
	feedbackReport: {
		marginTop: 20,
		marginLeft: 60
	},
	likeButton: {
		marginLeft: 9
	},
	shareButton: {
		marginLeft: 28
	},
	reportButton: {
		marginLeft: 20
	},
	views: {
		fontSize: 12,
		marginLeft: 10,
		opacity: .6
	},
	continuity: {
		fontSize: 12,
		marginLeft: 5,
		opacity: .6
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
		width: 34,
		height: 34,
		borderRadius: 100,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
});
