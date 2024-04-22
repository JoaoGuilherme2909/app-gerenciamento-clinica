import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from '../../../assets/logo.png'
import TextBox from '../../components/textBox';

export default function Home({navigation}){
    return (
        <View style={styles.container}>
            <Image source={logo}/>
            <View style={styles.inputContainer}>
                <TextBox style={styles.userInput} icon={'person-sharp'} placeholder={'Login'}/>
                <Text style={styles.emptySpace}></Text>
                <TextBox icon={'lock-closed'} placeholder={'Senha'}/>
            </View>
            <TouchableOpacity style={styles.Btn} onPress={() => {navigation.navigate('Init')}}>
                <Text style={styles.BtnText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    BtnText:{
        fontSize: 24,
        color: '#fff'
    },
    Btn:{
        backgroundColor: '#E7B811',
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 22,
        marginTop: 20

    }
})