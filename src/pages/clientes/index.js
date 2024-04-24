import { FlatList } from "react-native";
import { clientes } from "../../mocks/clientes";
import ItemCliente from "../../components/itemCliente";

export default function Clientes(){
    return(
        <FlatList 
            data={clientes}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ItemCliente id={item.id} nome={item.nome} cpf={item.CPF}/>}
        />
    )
}