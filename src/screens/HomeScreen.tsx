import React from 'react'
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import { useCharacterPaginated } from '../hooks/useCharacterPaginated';
import CharacterCard from '../components/CharacterCard';


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { characters, isLoading, loadMortys } = useCharacterPaginated();

    const _renderHeaderList = () => {
        return (
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                marginTop: top + 20,
                marginBottom: 20,
            }}>MortiDex</Text>
        )
    }

    const _renderFooterList = () => {
        return (
            isLoading 
            ? (
                <View style={{ marginBottom: 100 }}>
                    <ActivityIndicator size={ 30 } color="grey"/>
                </View>
            )
            : <></>
        )
    }

    return (
        <>
            <Image
                source={ require('../assets/rick-face.png') }
                style={ styles.backgroundScreen }
            />
            

            <View style={{ alignItems:'center' }}>
                <FlatList
                    ListHeaderComponent={ _renderHeaderList }
                    data={ characters }
                    keyExtractor={ (item) => item.id.toString() }
                    numColumns={ 2 }
                    renderItem={ ({ item }) => <CharacterCard character={ item } /> }
                    showsVerticalScrollIndicator={ false }
                    ListFooterComponent={ _renderFooterList }
                    
                    //infinite scroll
                    onEndReached={ loadMortys }
                    onEndReachedThreshold={ 0.4 }
                />
            </View>
        </>
    )
}

export default HomeScreen
