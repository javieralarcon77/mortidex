import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from '../theme/appTheme';

const LoadingComponent = () => {
    return (
        <View style={ styles.loadingContainer }>
            <ActivityIndicator 
                size={ 50 }
                color="grey"
            />
        </View>
    )
}

export default LoadingComponent
