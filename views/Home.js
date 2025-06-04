import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function Home() {
    const route = useRoute();
    const loggedUser = route.params;

    const navigation = useNavigation();
    const handleSundayService = () => {
        navigation.navigate('SundayService');
    }
    const handleBibleSchool = () => {
        navigation.navigate('BibleSchool');
    }

    useEffect(() => {
        // axios.get('http://localhost:3000/api/prova')
        //     .then(res => {
        //         console.log(res.data)
        //     })
        // console.log(loggedUser)
    }, [])


    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Liberi per davvero</Text>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Benvenuto, {loggedUser.name}!
                    </Text>
                </View>

                <View style={styles.cardContainer}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => handleSundayService()}
                    >
                        <ImageBackground
                            source={require('../assets/sunday-service.png')} // Replace with your local asset
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.label}>Incontri Domenica</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => handleBibleSchool()}
                    >
                        <ImageBackground
                            source={require('../assets/bible-school.png')} // Replace with your local asset
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.label}>Scuola Biblica</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3061DD",
    },
    titleContainer: {
        // backgroundColor: "#1a4fa3",
        width: '100%',
        padding: 20,

    },
    contentContainer: {
        backgroundColor: '#f3f7fc',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        marginTop: 'auto',
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 4,
        alignSelf: "flex-start",
    },
    header: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: "start",
        alignItems: "center",
        // backgroundColor: 'red',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Nunito'
    },
    cardContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: '#89bff9',
        marginBottom: 40,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        marginVertical: 20,
        alignItems: 'center',
        width: '85%',
        borderWidth: 2,
        borderColor: '#1a4fa3',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    image: {
        width: 250,
        height: 120,
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        color: '#1a4fa3',
        fontWeight: '500',
    },
});
