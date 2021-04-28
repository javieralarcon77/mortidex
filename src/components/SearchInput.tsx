import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchInput = () => {

    return (
        <View style={ styles.container }>
            <View style={ styles.textBackground }>
                <TextInput
                    placeholder="Buscar Personaje"
                    style={ styles.textInput }
                    autoCapitalize="none"
                    autoCorrect={ false }
                />
                <Icon 
                    name="search-outline"
                    color="grey"
                    size={ 30 }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    textBackground:{
        backgroundColor: "#F3F1F3",
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput:{
        flex:1,
        fontSize: 18,
    }
});

export default SearchInput
