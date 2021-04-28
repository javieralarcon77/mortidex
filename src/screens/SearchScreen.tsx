import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { styles } from '../theme/appTheme';

import SearchInput from '../components/SearchInput';
import CharacterCard from '../components/CharacterCard';
import LoadingComponent from '../components/LoadingComponent';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

    const { isLoading, characters, loadCharacters } =  useCharacterSearch('rick');

    const { top } = useSafeAreaInsets();

    const _renderHeaderList = () => {
        return (
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                marginTop: top + 60,
                marginBottom: 20,
            }}>MortiDex</Text>
        )
    }

    const ListCharacter = () => {
        return (
            <FlatList
                data={ characters }
                keyExtractor={ (item , index) => item.id.toString() + index }
                renderItem={ ({ item }) => <CharacterCard character={ item } /> }
                
                numColumns={ 2 }
                showsVerticalScrollIndicator={ false }
                ListHeaderComponent={ _renderHeaderList }
                
                //infinite scroll
                onEndReached={ loadCharacters }
                onEndReachedThreshold={ 0.4 }
            />
        )
    }

    return (
        <View style={{ 
            flex: 1, 
            paddingTop: top + 10,
        }}>            
            <SearchInput style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth - 40,
                top: top + 10,
                left: 20,
            }}/>
            
            {
                isLoading 
                ? <LoadingComponent />
                : <ListCharacter />
            }
            
            
        </View>
    )
}

export default SearchScreen
