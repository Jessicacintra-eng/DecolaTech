import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409';
const fontColorGitHub = '#C9D1D9'
const fontColorDarkGitHub = '#4f565e'
const gitHubProfile = "https://github.com/Jessicacintra-eng"

const imageProfile = "https://avatars.githubusercontent.com/u/79220648?v=4"
const App = () => {
    const handlePressGoToGitHub = async () =>{
        console.log('verificando link')
        const res = await Linking.canOpenURL(gitHubProfile)
        if(res){
            console.log('link aprovado')
            console.log('abrindo link...')
           await Linking.openURL(gitHubProfile)
        }
    }
    return (

        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel='Foto de Jessica Cintra' source={{ uri: imageProfile }} style={style.avatar} />
                <Text accessibilityLabel='Nome: Jessica Cintra' style={[style.text, style.name]}> Jessica Cintra </Text>
                <Text accessibilityLabel='Nickname: Jessicacintra-eng' style={[style.text,style.nickName]}>Jessicacintra-eng </Text>
                <Text accessibilityLabel='Derscrição: Sou desenvolvedora web e engenheira de bioprocessos e biotecnologia. ' style={[style.text,style.description]}>Sou desenvolvedora web e engenheira de bioprocessos e biotecnologia. </Text>
            <Pressable onPress={handlePressGoToGitHub}>

            <View style={style.button}>
                <Text  style={[style.text, style.texButton]}>Open in GitHub</Text>
            </View>
            </Pressable>
            </View>
            

        </SafeAreaView>

    );
};
export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
    },
    content: {
        alignItems:'center',
        padding: 20,
    },
    text: {
        color: fontColorGitHub,
        textAlign:'center',
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
        borderColor: 'yellow',
        borderWidth: 3,
    },
    name:{
        marginTop: 20,
        fontSize: 24,
        fontWeight:'bold',
    },
    nickName:{
        fontSize: 20,
        color: fontColorDarkGitHub,
    },
    description:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        marginTop:20,
        backgroundColor: fontColorDarkGitHub,
        borderRadius:40,
        padding:20,
        borderColor: 'yellow',
        borderWidth:1,

    },
    texButton:{
        fontWeight: 'bold',
        fontSize:16,
        color:'yellow'
    }

});
