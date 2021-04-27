import React from 'react'
import { Text, Image, FlatList, View, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { useCharacterPaginated } from '../hooks/useCharacterPaginated';
import { Character } from '../interfaces/appInterfaces';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { characters, isLoading, loadMortys } = useCharacterPaginated();


    const _renderCharacter = (item:Character) => {
        return (
            <View>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                />
                <Text>{ item.name }</Text>
            </View>
        )
    }

    const _renderHeaderList = () => {
        return (
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                marginTop: top + 20,
            }}>MortiDex</Text>
        )
    }

    const _renderFooterList = () => {
        return (
            isLoading 
            ? <ActivityIndicator size={ 30 } color="grey"/>
            : <></>
        )
    }

    return (
        <>
            <Image
                source={ require('../assets/rick-face.png') }
                style={ styles.backgroundScreen }
            />
            

            <FlatList
                ListHeaderComponent={ _renderHeaderList }
                data={ characters }
                keyExtractor={ (item) => item.id.toString() }
                renderItem={ ({ item }) => _renderCharacter(item) }
                showsVerticalScrollIndicator={ false }
                ListFooterComponent={ _renderFooterList }
                
                //infinite scroll
                onEndReached={ loadMortys }
                onEndReachedThreshold={ 0.4 }
            />
        </>
    )
}

export default HomeScreen
