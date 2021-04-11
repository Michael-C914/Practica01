import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

//creacion de componente con variables
function Item({title,image}) {
//return nos mostrara la imagen y el texto
    return (
        <View style={styles.item}>
            <Image source={{uri:image}} style={{height: 40, width: 40}} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

//definiremos la clase como un omponente
export default class ConexionFetch extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            textValue: 0,
            count: 0,
//tomaran datos de la Api pero para ello se tomara como una variable
            items: [],
            error: null,
        };
    }

//Es una conexion de Reactnative para tomar datos de la api
    async componentDidMount() {
//fetch estara aplicando la api que tomara los datos
        await fetch('https://yts.mx/api/v2/list_movies.json')
        .then(res => res.json())
        .then(
            result => {
//Nos mostrara los resultados en la consola con la condicion de dar el resultado tome los datos de "data" y los pase a "movies"
                console.warn('result', result.data.movies);
                this.setState({
//items tomara los datos de "data" como tambien de "movies", a eso se le llamara como un recorrido
                    items:result.data.movies,
                });
            },
            error => {
                this.setState({
                    error: error,
                });
            },
        );
    }
    render() {
//const etara definido para tomar las librerias de la clase padre, estara definiendo navigationcontainer
        const {navigate} = this.props.navigation;

        return (

            <View style={styles.container}>
//creamos el componente definido de react native como flatlist
                <FlatList
//tomara la "data" como anteriores veces que recorrera los  "items" para la toma de datos
                    data={this.state.items.length > 0 ? this.state.items:[]}
//renderitem se encargara de que componentes debera mostrarnos
                    renderItem={({item}) => {
                        return(
//creamos un boton "TouchableOpacity" donde se puede seleccionar lo que nos mostrara en la aplicacion
//onPress definira que navigate buscara el componente "Detalles" donde se definira una variable que es "itemObject" que estara tomando de la api
                            <TouchableOpacity onPress={() => navigate('Detalles', {itemObject: item})}>
//lo que nos mostrara en la aplicacion del componente "item"
                                <Item
                                    title={item.title}
                                    image={item.small_cover_image} 
//nos mostrara los datos de "Detalles" de la clase padre
                                    navigation={this.props.navigation}
                                />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                    navigation={this.props.navigation}
                />
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
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});