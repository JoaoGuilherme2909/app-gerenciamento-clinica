import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function ItemCliente({id, nome, cpf}){
    return(
        <View style={styles.container}>
            <Ionicons name="bookmark" size={24} color="black" />
            <View>
                <Text style={styles.informacoes}>
                    {id}.{nome} {cpf}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    informacoes:{
        fontSize: 18,
        lineHeight: 27

    }
})