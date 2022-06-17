import { TabRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable, Appearance } from 'react-native';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { Text, View, Image } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Video, AVPlaybackStatus } from "expo-av";
import * as React from 'react';

export default function VideoScreen({ route, navigation }: RootStackScreenProps<'Video'>) {
	const colorScheme = Appearance.getColorScheme() == "dark" ? 'white' : 'black';
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
				resizeMode='contain'
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
			<View>
				<View style={styles.inline}>
					<View style={styles.feedbackLike}>
						<Pressable
							onPress={() => {setLikeOrNot(!likeOrNot)}}>
							<AntDesign style={styles.likeButton} name={likeOrNot ? 'like2' : 'like1'} size={24} color={colorScheme}/>
						</Pressable>
						<Text style={styles.centralized}>13 mil</Text>
					</View>
					<View style={styles.feedbackShare}>
						<AntDesign style={styles.shareButton} name="sharealt" size={24} color={colorScheme} />
						<Text style={styles.centralized}>Compartilhar</Text>
					</View>
					<View style={styles.feedbackReport}>
						<AntDesign style={styles.reportButton} name="flag" size={24} color={colorScheme} />
						<Text style={styles.centralized}>Denunciar</Text>
					</View>
				</View>
			</View>
			<View style={styles.inlineWithBorders}>
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
				</Pressable>
				<Pressable
					onPress={() => {navigation.navigate('Channel', {
						channelId: 1,
					})}}
				>
					<Text style={{marginTop: 9, fontSize: 14}}>Você Sabia?</Text>
					<Text style={{fontSize: 12, opacity: .6}}>7 mi inscritos</Text>
				</Pressable>
				<Text style={{fontSize: 20, color: 'red', fontWeight: '800', justifyContent: 'center', alignSelf: 'center', marginLeft: 'auto', marginRight: 15}}>SEGUIR</Text>
			</View>
			{ showDescription &&
				<View style={styles.borderBottomWithOpacity}>
					<Text style={styles.description}>A suite VLibras é um conjunto de ferramentas gratuitas e de código aberto que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras, tornando computadores, celulares e plataformas Web mais acessíveis para as pessoas surdas.</Text>
				</View>
			}
			<View style={styles.mLeft}>
				<Text style={styles.titleSec}>Comentários</Text>
			</View>
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
	inlineWithBorders: {
		marginTop: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: 'rgba(255,255,255,.15)',
		flexDirection: 'row'
	},
	mLeft: {
		flexDirection:'row',
		flexWrap:'wrap',
		paddingTop: 5,
	},
	title: {
		marginTop: 10,
		marginLeft: 10,
		fontSize: 20,
		fontWeight: 'bold',
		width: '80%',
	},
	titleSec: {
		marginLeft: 10,
		fontSize: 20,
		fontWeight: 'bold',
		width: '80%',
	},
	feedbackLike: {
		flex: 1,
		marginTop: 20
	},
	feedbackShare: {
		flex: 1,
		marginTop: 20
	},
	feedbackReport: {
		flex: 1,
		marginTop: 20
	},
	likeButton: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems:'center',
	},
	shareButton: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems:'center',
	},
	reportButton: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems:'center',
	},
	centralized: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems:'center',
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
		marginTop: 15,
		marginLeft: 40,
		color: '#999'
	},
	description: {
		margin: 10,
		fontSize: 16,
		paddingBottom: 5
	},
	borderBottomWithOpacity: {
		borderBottomWidth: 1,
		borderColor: 'rgba(255,255,255,.15)'
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
