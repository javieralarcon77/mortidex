import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigate } from './src/navigate/Navigate';

const App = () => {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  )
}

export default App
