import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Character } from '../interfaces/appInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';
import ImageColors from "react-native-image-colors"

interface Props{
    character:Character;
}

const windowWidth = Dimensions.get('screen').width;

const CharacterCard = ({ character }:Props) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);

    const getColorBackground = async (uri:string) => {
        let color = 'grey';
        try{
            const colors = await ImageColors.getColors(uri,{ });
            if( colors.platform === 'IOS' ){
                color = colors.background;
            }else
                color = colors.average;
        }catch(e){}
        
        if(isMounted)
            setBgColor( color );
    }

    useEffect(() => {
        if(character)
            getColorBackground( character.image );

        return () => {
            isMounted.current = false;
        }
    }, [ character ]);

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
        >
            <View style={{
                ...cardStyles.cardContainer,
                backgroundColor: bgColor,
            }}>
                <View style={ cardStyles.textContainer }>
                    <Text style={ cardStyles.name }>
                        { character.name }
                    </Text>
                    <Text style={ cardStyles.number }>
                        { '#' + character.id }
                    </Text>
                </View>
                <Image
                    source={ require('../assets/icon-api.png') }
                    style={ cardStyles.background }
                />
                <FadeInImage
                    uri={ character.image }
                    style={ cardStyles.image }
                />

            </View>
        </TouchableOpacity>
    )
}

const cardStyles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: windowWidth * 0.45,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    textContainer:{
        paddingVertical: 10,
        flex:1,
        justifyContent:'space-between',
    },
    name:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        left: 10,
        paddingRight: 40,
    },
    
    number:{
        color:'white',
        fontSize: 30,
        fontWeight: 'bold',
        left: 10,
        paddingRight: 40,
    },
    image:{ 
        width: 80, 
        height: 80,
        borderRadius: 100,
        position:'absolute',
        bottom: 2,
        right: 2,
    },
    background:{
        width:80,
        height:80,
        position:'absolute',
        bottom: 2,
        right: 2,
        opacity: 0.2,
    }
});

export default CharacterCard
