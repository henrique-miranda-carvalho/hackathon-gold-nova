import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Image, ScrollView, Pressable } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function TvsScreen({ navigation }: RootTabScreenProps<'Videos'>) {
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
						source={require('../assets/images/placeholder.png')}
					/>
					<View style={styles.separatorFromVideo} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
					<View style={styles.inline}>
						<Pressable
							onPress={() => {navigation.navigate('Channel', {
								channelId: 1,
							})}}
						>
							<Image style={styles.channelIcon} source={require('../assets/images/placeholder.png')}/>
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
					onPress={() => {navigation.navigate('Video', {
						videoId: 1,
					})}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/placeholder.png')}
					/>
					<View style={styles.separatorFromVideo} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
					<View style={styles.inline}>
						<Pressable
							onPress={() => {navigation.navigate('Channel', {
								channelId: 1,
							})}}
						>
							<Image style={styles.channelIcon} source={require('../assets/images/placeholder.png')}/>
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
					onPress={() => {navigation.navigate('Video', {
						videoId: 1,
					})}}
				>
					<Image
						style={styles.cardImage}
						source={require('../assets/images/placeholder.png')}
					/>
					<View style={styles.separatorFromVideo} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
					<View style={styles.inline}>
						<Pressable
							onPress={() => {navigation.navigate('Channel', {
								channelId: 1,
							})}}
						>
							<Image style={styles.channelIcon} source={require('../assets/images/placeholder.png')}/>
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
		flex: 1
	},
	title: {
		fontFamily: 'Roboto',
		marginLeft: 10,
		marginTop: -5,
		fontSize: 19,
		fontWeight: '600',
		width: '80%'
	},
	subtitles: {
		fontSize: 12,
		opacity: .6
	},
	continuity: {
		fontSize: 12,
		marginLeft: 5,
		opacity: .6
	},
	separator: {
		marginVertical: 10,
		height: 1,
		width: '100%'
	},
	separatorFromVideo: {
		marginVertical: 5,
		height: 1,
		width: '100%'
	},
	cardBackground: {
		flex: 1
	},
	cardImage: {
		width: '100%',
		height: 210
	},
	channelIcon: {
		width: 30,
		height: 30,
		borderRadius: 100,
		marginLeft: 10
	},
	inline: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	inlineInside: {
		marginLeft: 52,
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});
