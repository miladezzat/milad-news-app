import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from './RootNavigation';

export default function Footer() {
    return (
        <View style={styles.footer}>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() =>RootNavigation.navigate('MiladNewsApp')}
            >
                <Text style={styles.text}>Home</Text>    
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() =>RootNavigation.navigate('About')}
            >
	            <Text style={styles.text}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() =>RootNavigation.navigate('Quote', {
                    model: 'Footer',
                    modelnumber: 'NoMessage'
                    })
                }
            >
	            <Text style={styles.text}>Quote</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() =>RootNavigation.navigate('Catalog')}
            >
	            <Text style={styles.text}>Catalog</Text>
            </TouchableOpacity>

            

        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderWidth: 1,
        borderTopColor: '#123',
        backgroundColor: '#123456'
    },

    button:{
        padding: 20,        
        marginEnd: 10,
        borderWidth: 1,
        marginVertical: 5,
        borderColor: '#fff',
        borderRadius: 10,
    },
    text: {
        color: '#fff',
    }
});