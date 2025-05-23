import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { clientes } from "../../mocks/clientes";
import ItemCliente from "../../components/itemCliente";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Clientes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput style={styles.input} placeholder="Buscar clientes" />
        <TouchableOpacity style={styles.button}>
          <Ionicons name="search" size={24} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="person-add" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCliente id={item.id} nome={item.nome} cpf={item.CPF} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
  },
  button: {
    margin: 5,
    padding: 12,
    backgroundColor: "#E7B811",
    borderRadius: 22,
  },
  input: {
    backgroundColor: "#D9D9D9",
    flex: 2,
    margin: 8,
    borderRadius: 12,
    padding: 5
  },
  buttonAdd: {
    backgroundColor: "#E7B811",
    height: 55,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
