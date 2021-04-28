import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal:20
    },
    backgroundScreen:{
        position:'absolute',
        top: -50,
        right: -50,
        width: 300,
        height: 300,
        opacity: 0.2,
    },
    title:{
        fontSize:35,
        fontWeight: 'bold',
    },
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});