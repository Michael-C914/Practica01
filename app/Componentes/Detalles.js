import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

export default class Detalles extends Component {
    render() {
//params nos servira como ruta para tomar datos de la api
        const {params} = this.props.route;
        return ( 
            <View style={styles.item}>
                <Image source={{uri:params.itemObject.small_cover_image}} style={{height: 70, width: 70}} />
                <Text style={styles.title}>{params.itemObject.title}</Text>
                <Text style={styles.summary}>{params.itemObject.summary}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#65CEB2',
        padding: 20,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    summary: {
        fontSize: 20,
    },
});