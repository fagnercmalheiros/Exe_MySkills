import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home(){
    return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Aluno</Text>
      <TextInput style={styles.input}/>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <text>Add</text>
        </TouchableOpacity>
    {/* <Text style={styles.textFooter}>Unicruz</Text> */}
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        container: {
      flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 20,
      paddingVertical: 50
    },
        title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold'
    },
        input: {
        backgroundColor: '#1f1e25',
        color: "#fff",
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    },
        button: {
        backgroundColor: '#a370f7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 14
    },
        textFooter:{
         alignSelf: 'center',
        marginBottom: 20
    }
})