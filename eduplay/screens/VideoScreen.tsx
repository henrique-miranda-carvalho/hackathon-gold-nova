import { TabRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable, Appearance, ScrollView } from 'react-native';
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
			<ScrollView>
				<Video
					ref={video}
					style={styles.video}
					source={require('../assets/videos/video1.mp4')}
					useNativeControls
					resizeMode='contain'
				/>
				<View style={styles.inline}>
					<Text style={styles.titleBig}>Vídeo Exemplo</Text>
					<Pressable
						onPress={() => { setShowDescription(!showDescription) }}
						style={styles.inline}
					>
						<FontAwesome name={showDescription ? 'angle-up' : 'angle-down'} size={24} style={styles.showDescription} />
					</Pressable>
				</View>
				<View style={styles.inline}>
					<Text style={styles.views}>100 mil visualizações</Text>
					<Text style={styles.continuity}>•</Text>
					<Text style={styles.continuity}>há 1 hora</Text>
				</View>
				<View>
					<View style={styles.inline}>
						<View style={styles.feedbackLike}>
							<Pressable
								onPress={() => { setLikeOrNot(!likeOrNot) }}>
								<AntDesign style={styles.likeButton} name={likeOrNot ? 'like2' : 'like1'} size={24} color={colorScheme} />
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
						onPress={() => {
							navigation.navigate('Channel', {
								channelId: 1,
							})
						}}
						style={styles.channel}
					>
						<Image
							style={styles.channelIconBig}
							source={require('../assets/images/placeholder.png')}
						/>
					</Pressable>
					<Pressable
						onPress={() => {
							navigation.navigate('Channel', {
								channelId: 1,
							})
						}}
					>
						<Text style={{ marginTop: 9, fontSize: 14 }}>Canal Exemplo</Text>
						<Text style={{ fontSize: 12, opacity: .6 }}>100 inscritos</Text>
					</Pressable>
					<Text style={{ fontSize: 20, color: 'red', fontWeight: '800', justifyContent: 'center', alignSelf: 'center', marginLeft: 'auto', marginRight: 10 }}>SEGUIR</Text>
				</View>
				{showDescription &&
					<View style={styles.borderBottomWithOpacity}>
						<Text style={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquid dolore ipsa eveniet quidem veritatis dolorem cumque iusto magni eligendi repudiandae possimus ullam quisquam odio sed, exercitationem commodi fugit labore!</Text>
					</View>
				}
				<View style={styles.mLeft}>
					<Text style={styles.titleSec}>Comentários</Text>
				</View>
				<Pressable
					onPress={() => {
						navigation.navigate('Video', {
							videoId: 1,
						})
					}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/placeholder.png')}
					/>
					<View style={styles.separatorFromVideo} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
					<View style={styles.inline}>
						<Pressable
							onPress={() => {
								navigation.navigate('Channel', {
									channelId: 1,
								})
							}}
						>
							<Image style={styles.channelIcon} source={require('../assets/images/placeholder.png')} />
						</Pressable>
						<Text style={styles.title} numberOfLines={2}>Exemplo</Text>
						<View style={styles.inlineInside}>
							<Text style={styles.subtitles}>Exemplo</Text>
							<Text style={styles.continuity}>•</Text>
							<Text style={styles.continuity}>100 mil visualizações</Text>
							<Text style={styles.continuity}>•</Text>
							<Text style={styles.continuity}>há 1 hora</Text>
						</View>
					</View>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.navigate('Video', {
							videoId: 1,
						})
					}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/placeholder.png')}
					/>
					<View style={styles.separatorFromVideo} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
					<View style={styles.inline}>
						<Pressable
							onPress={() => {
								navigation.navigate('Channel', {
									channelId: 1,
								})
							}}
						>
							<Image style={styles.channelIcon} source={require('../assets/images/placeholder.png')} />
						</Pressable>
						<Text style={styles.title} numberOfLines={2}>Exemplo</Text>
						<View style={styles.inlineInside}>
							<Text style={styles.subtitles}>Exemplo</Text>
							<Text style={styles.continuity}>•</Text>
							<Text style={styles.continuity}>100 mil visualizações</Text>
							<Text style={styles.continuity}>•</Text>
							<Text style={styles.continuity}>há 1 hora</Text>
						</View>
					</View>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.navigate('Video', {
							videoId: 1,
						})
					}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/placeholder.png')}
					/>
					<View style={styles.separatorFromVideo} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
					<View style={styles.inline}>
						<Pressable
							onPress={() => {
								navigation.navigate('Channel', {
									channelId: 1,
								})
							}}
						>
							<Image style={styles.channelIcon} source={require('../assets/images/placeholder.png')} />
						</Pressable>
						<Text style={styles.title} numberOfLines={2}>Exemplo</Text>
						<View style={styles.inlineInside}>
							<Text style={styles.subtitles}>Exemplo</Text>
							<Text style={styles.continuity}>•</Text>
							<Text style={styles.continuity}>100 mil visualizações</Text>
							<Text style={styles.continuity}>•</Text>
							<Text style={styles.continuity}>há 1 hora</Text>
						</View>
					</View>
					<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				</Pressable>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	cardImage: {
		width: '100%',
		height: 210
	},
	titleMore: {
		fontFamily: 'Roboto',
		marginLeft: 10,
		marginTop: -5,
		fontSize: 19,
		fontWeight: '600',
		width: '80%'
	},
	channelIconMore: {
		width: 30,
		height: 30,
		borderRadius: 100,
		marginLeft: 10
	},
	inline: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	inlineWithBorders: {
		marginTop: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: 'rgba(255,255,255,.15)',
		flexDirection: 'row'
	},
	inlineInside: {
		marginLeft: 52,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	separatorFromVideo: {
		marginVertical: 5,
		height: 1,
		width: '100%'
	},
	subtitles: {
		fontSize: 12,
		opacity: .6
	},
	mLeft: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderColor: 'rgba(255,255,255,.15)'
	},
	titleBig: {
		marginTop: 10,
		marginLeft: 10,
		fontSize: 20,
		fontWeight: 'bold',
		width: '80%',
	},
	title: {
		fontFamily: 'Roboto',
		marginLeft: 10,
		marginTop: -5,
		fontSize: 19,
		fontWeight: '600',
		width: '80%'
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
		alignItems: 'center',
	},
	shareButton: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
	},
	reportButton: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
	},
	centralized: {
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
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
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 10,
	},
	channelName: {
		margin: 10,
		fontSize: 18,
		width: '80%',
	},
	channelIconBig: {
		width: 34,
		height: 34,
		borderRadius: 100,
	},
	channelIcon: {
		width: 30,
		height: 30,
		borderRadius: 100,
		marginLeft: 10
	},
	separatorBig: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
	separator: {
		marginVertical: 10,
		height: 1,
		width: '100%'
	},
	separatorMore: {
		marginVertical: 10,
		height: 1,
		width: '100%'
	},
	continuityMore: {
		fontSize: 12,
		marginLeft: 5,
		opacity: .6
	}
});
