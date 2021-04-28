import React, { useState } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { styles } from '../theme/appTheme';

import SearchInput from '../components/SearchInput';
import CharacterCard from '../components/CharacterCard';
import LoadingComponent from '../components/LoadingComponent';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

    const [search, setSearch] = useState("");

    const { isLoading, characters, loadCharacters } =  useCharacterSearch( search );

    const { top } = useSafeAreaInsets();

    const _renderHeaderList = () => {
        return (
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                marginTop: top + 60,
                marginBottom: 20,
            }}>{ search }</Text>
        )
    }

    const _renderFooterList = () => {
        return (
            isLoading 
            ? <LoadingComponent />
            : <></>
        )
    }

    return (
        <View style={{ 
            flex: 1, 
            paddingTop: top + 10,
        }}>            
            <SearchInput 
                style={{
                    ...styles.searchPosition,
                    width: screenWidth - 40,
                    top: top + 10,                    
                }}
                onChange={ setSearch }
            />
            
            <FlatList
                data={ characters }
                keyExtractor={ (item , index) => item.id.toString() + index }
                renderItem={ ({ item }) => <CharacterCard character={ item } /> }
                
                numColumns={ 2 }
                showsVerticalScrollIndicator={ false }
                ListHeaderComponent={ _renderHeaderList }
                ListFooterComponent={ _renderFooterList }
                
                //infinite scroll
                onEndReached={ loadCharacters }
                onEndReachedThreshold={ 0.4 }
            />
        </View>
    )
}

export default SearchScreen
