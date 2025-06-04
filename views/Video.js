// VideoPlayerScreen.js
import { navigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Video({ navigation }) {
    const route = useRoute();
    const video = route.params;



    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerIcon}
                    onPress={() => navigation.goBack()} >
                    <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.pageTitle}></Text>
                <Text style={styles.pageTitle}>{video.title}</Text>
            </View>
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text> Indietro</Text>
                    </TouchableOpacity> */}
                <YoutubePlayer
                    // ref={playerRef}  
                    height={Dimensions.get('window').width * (9 / 16)}
                    width={'100%'}
                    play={true}
                    videoId={video.youtubeId} // Replace with your church's YouTube live/recorded video ID
                />
            </View>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#52B4F9',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    pageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111',
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (9 / 16), // 16:9 ratio
        alignSelf: 'center',
    },
});