import { FlatList, Text, View } from 'react-native';
import { agendamentos } from '../../mocks/agendamentos';
import Item from '../../components/item';

export default function Agendamentos(){
    return(
        <View>
            <FlatList 
                data={agendamentos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Item id={item.id} nome={item.cliente} data={item.data} hora={item.hora}/>}
            />
        </View>
    )
}