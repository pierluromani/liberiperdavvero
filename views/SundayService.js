import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function SundayMeetingsScreen({ navigation }) {
    const [videos, setVideos] = useState()

    const handleClick = (video) => {
        navigation.replace('Video', video);
    }


    useEffect(() => {
        // console.log(navigation)
        axios.get('http://localhost:3000/api/videos/getVideos')
            .then(res => {
                setVideos(res.data)
                // console.log(res.data[0].date)
            })
    }, [])

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerIcon}
                        onPress={() => navigation.goBack()} >
                        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.titlePage}>Incontri Domenica</Text>
                    {/* <TouchableOpacity style={styles.homeButton}>
                        <Text style={styles.homeButtonText}>Home</Text>
                    </TouchableOpacity> */}
                </View>

                <View style={styles.searchRow}>
                    <View style={styles.searchBox}>
                        <Ionicons name="search" size={20} color="black" style={{ marginRight: 5 }} />
                        <TextInput placeholder="Cerca" style={styles.searchInput} />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="options-outline" size={20} color="black" />
                        <Text style={styles.filterText}>Filtri</Text>
                    </TouchableOpacity>
                </View>

                /* <FlatList
                    data={videos}
                    renderItem={({ item }) => {
                        const formattedDate = format(item.date, 'dd/MM/yyyy');
                        // console.log(`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`)
                        return (
                            <TouchableOpacity style={styles.card}
                                onPress={() => handleClick(item)}>
                                <Image source={{
                                    uri: `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
                                }} style={styles.thumbnail} />
                                <View style={styles.dataContainer}>
                                    <Text style={styles.date}>{formattedDate}</Text>
                                    <Text style={styles.title}>{item.title}</Text>
                                    {/* <Text style={styles.title}>{item.youtubeId}</Text> */}
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    }

                    keyExtractor={(item) => item.youtubeId}
                    numColumns={1}
                    contentContainerStyle={{ paddingBottom: 100 }}
                /> */
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
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
    },
    titlePage: {
        flex: 5,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#111',
        textShadowColor: '#ccc',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5,

    },
    headerIcon: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    homeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#52B4F9',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 15,
    },
    homeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    searchBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 10,
        height: 40,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#77A4DB',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    thumbnail: {
        width: '40%',
        height: 100,
        borderRadius: 15,
        flex: 1
        // backgroundColor: '#000',
    },
    dataContainer: {
        flex: 2,
        paddingHorizontal: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    date: {
        fontSize: 12,
        color: '#52B4F9',
        marginTop: 8,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
    },
});
