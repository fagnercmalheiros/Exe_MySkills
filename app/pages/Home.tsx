/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

        <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.5}
        onPress={handleAddNewSkill}
        >

        <text style={styles.buttonText}
        >
            Add
        </text>
        </TouchableOpacity>

            {
            mySkills.map(skill => (
                <TouchableOpacity style={styles.buttonSkill}>
                <Text style={styles.buttonText}>{skill.name}</Text>
                </TouchableOpacity>
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
        buttonText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold'
    },
        buttonSkill: {
        backgroundColor: '#1f1e25',
        color: "#fff",
        fontSize: 14,
        marginTop: 12,
        padding: 12,
        alignItems: 'center',
        borderRadius: 7
    },
        textFooter:{
         justifyContent: 'flex-end',
        color: '#fff'
    }
})