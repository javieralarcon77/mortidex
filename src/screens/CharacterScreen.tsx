import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeInImage'
import { RootStackParams } from '../navigate/HomeNavigate'
import useCharacterEpisodies from '../hooks/useCharacterEpisodies';
import CharacterDetails from '../components/CharacterDetails'

interface Props extends StackScreenProps<RootStackParams, 'CharacterScreen'>{

}

const CharacterScreen = ({ route, navigation }:Props) => {
    const { character, color } = route.params;

    const { name, id, image } = character;

    const { top }= useSafeAreaInsets();

    const { isLoading, episodes } = useCharacterEpisodies( character );

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                ...myStyles.headerContainer,
                backgroundColor: color,
            }}>

                {/** boton atras */}
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={ {
                        ...myStyles.backButton,
                        top: top + 2,
                    } }
                    onPress={ () => navigation.pop()  }
                >
                    <Icon  name="arrow-back-outline" color="white" size={ 35 }/>
                </TouchableOpacity>

                {/** nombre del personaje */}
                <Text style={{
                    ...myStyles.characterName,
                    top: top + 30
                }}>{ name + '\n' }#{ id }</Text>

                {/** background */}
                <Image
                    style={ myStyles.backgroundImage }
                    source={ require('../assets/icon-api.png') }
                />

                <FadeInImage 
                    uri={ image }
                    style={ myStyles.characterImage }
                />
            </View>
            
            { /** detalles y loading */ }
            {
                isLoading
                ? ( <View style={ myStyles.loadingIndicator }>
                        <ActivityIndicator
                            color={ color }
                            size={ 50 }
                        />
                    </View>
                ) : <CharacterDetails character={ character } episodes={ episodes }/>
            }
        </View>
    )
}

const myStyles = StyleSheet.create({
    headerContainer:{
        height: 370,
        zIndex: 999,
        alignItems:'center',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000
    },
    backButton:{
        position: 'absolute',
        left: 20,
    },
    characterName:{
        color:'white',
        fontSize: 40,
        alignSelf:'flex-start',
        left: 20,
    },
    backgroundImage:{
        opacity: 0.2,
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: 0,
    },
    characterImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: 0,
        borderRadius: 250,
    },
    loadingIndicator:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',

    }
});

export default CharacterScreen
