import { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillFormat{
    id: number
    name: string
}

export function Home(){

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillFormat[]>([])

    function handleAddNewSkill(){
        const data = {
            id: new Date().getTime(),
            name: newSkill
        }

        //setMySkills(oldstate => [...oldstate, data])
        setMySkills([...mySkills, data])
    }

    return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome, Aluno
        </Text>

      <TextInput 
      style={styles.input}
      placeholder="Write your skill"
      placeholderTextColor='#555'
      onChangeText={setNewSkill}
      />

        <Button title="adicionar" onPress={handleAddNewSkill}/>


        {
            mySkills.map(skill => (
            <SkillCard />
            ))
        }

    {/* <Text style={styles.textFooter}>{newSkill}</Text> */}
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
        padding: Platform.OS === 'ios'? 15 : 10,
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
         justifyContent: 'flex-end',
        color: '#fff'
    }
})