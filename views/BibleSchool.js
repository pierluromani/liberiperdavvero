import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function BibleSchool() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Scuola Biblica</Text>
            <Text style={styles.description}>
                Approfondisci la tua conoscenza della Parola con lezioni e materiale dedicato.
            </Text>

            {/* 🔽 Inserisci qui lezioni o moduli */}
            <View style={styles.contentBox}>
                <Text style={styles.contentTitle}>Modulo 1: Introduzione alla Bibbia</Text>
                <Text>• Video lezione disponibile</Text>
                <Text>• Slide PDF scaricabile</Text>
            </View>

            <View style={styles.contentBox}>
                <Text style={styles.contentTitle}>Modulo 2: I Vangeli</Text>
                <Text>• Prossimamente...</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F8F9FB',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6A4E3B',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    contentBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#ccc',
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    contentTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 16,
    },
});
