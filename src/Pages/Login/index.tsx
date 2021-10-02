import React, {useState} from 'react';
import { View, Text , TextInput, Button, Image, Alert, SafeAreaView,
    TouchableHighlight} from 'react-native';
import { styles } from './style';


const Login = () => {
    const [meuTexto,setMeuTexto] = useState('Logar');
    return(
        
        <View style={styles.container}>
            <Image 
            style={styles.face}
            source={require("../../assets/face.png")}>
            </Image>
            <TextInput
                style={styles.input}
                onChangeText={setMeuTexto}
                placeholder="Email"
               
            />
            <TextInput
                style={styles.input}
                onChangeText={setMeuTexto}
                placeholder="Password"
                
            />
            <SafeAreaView style={styles.containerbot}>
            <Button
                title="Log in"
                color= "#191970"
                onPress={() => Alert.alert('LOGADO!!')}
            />
            </SafeAreaView>
            <TouchableHighlight >
                <View style={styles.butao}>
                <Text style={styles.butaotext}>Sign up for Facebook</Text>
                </View>
            </TouchableHighlight>
        </View>
    );

}

export default Login;