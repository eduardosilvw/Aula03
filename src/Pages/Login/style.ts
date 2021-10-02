import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#455cb1",
    },
    input: {
      height: 45,
      borderColor:"#fffafa",
      margin: 15,
      borderWidth:1,
      borderRadius:0,
      color:'black',
      padding: 7,  
      backgroundColor: "#fffafa",
        },
    face: {
        width: 400,
        height: 70,
        marginBottom: 55,
        marginLeft: 14,
        resizeMode: 'stretch',
    },
    containerbot: {
        paddingTop: 10,
        justifyContent: 'center',
        marginHorizontal: 14,
    },
    butaotext: {
        color:"#fffafa",
        marginLeft: 145,
        marginTop: 110,
        justifyContent: 'center',
    }
});