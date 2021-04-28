import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Character, Episode } from '../interfaces/appInterfaces';

interface Props{
    character:Character,
    episodes:Episode[]
}

const CharacterDetails = ({ character, episodes }:Props) => {

    const ItemDetail = ( {title, detail}:{ title:string, detail: string }  ) => {
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>
                    { title }
                </Text>
                <Text style={ styles.text }>
                    { detail }
                </Text>
            </View>
        )
    }

    
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
            showsVerticalScrollIndicator={ false }
        >
            {/* Origen */}
            <View style={{
                ...styles.container,
                marginTop: 350,
            }}>
                <Text style={ styles.title }>
                    Origin: 
                </Text>
                <Text style={ styles.text }>
                    { character.origin.name }
                </Text>
            </View>
            
            <ItemDetail 
                title="Species and Gender:"
                detail={ character.species + '-' + character.gender }
            />
            <ItemDetail 
                title="Location:"
                detail={ character.location.name  }
            />

            {/* episodios */}
            <View
                style={ {
                    ...styles.container,
                    marginBottom: 50,
                } }
            >
                <Text style={ styles.title }>
                    Episodios
                </Text>
                {
                    episodes.map( (episode) => (
                        <View style={ styles.itemList } key={ episode.id }>
                            <Text style={ styles.text }>{ `${ episode.episode } - ${ episode.name }` }</Text>
                            <Text style={ styles.text }>Air Date: { episode.air_date }</Text>
                        </View>
                    ) )
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    text:{
        fontSize: 18,
    },
    itemList:{
        borderBottomWidth:1,
        paddingVertical: 5,
    }
});

export default CharacterDetails
