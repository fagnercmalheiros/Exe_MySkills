import { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillFormat{
    id: string
    name: string
}

export function Home(){

    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillFormat[]>([])
    const [greetings, setGreeting] = useState('')

    //1º a função e 2º a dependência
    // useEffect(() => {
    //     console.log("useEffect executado!")
    // }, [mySkills])

    useEffect(() => {
        const currentHour = new Date().getHours()
        //const currentHour = 22
        //console.log(currentHour)

        if(currentHour <12){
            setGreeting('Good Morning!')
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Good Afternoon!')
        }
        else {
            setGreeting('Good Night!')
        }
    }, [])

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        //['programa', 'react native', 'proximo item']
        //setMySkills(oldstate => [...oldstate, data])
        setMySkills([...mySkills, data])
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome, Aluno
        </Text>
        <Text style={styles.greetings}>
            {greetings}
        </Text>

      <TextInput 
      style={styles.input}
      placeholder="Write your skill"
      placeholderTextColor='#555'
      onChangeText={setNewSkill}
    //  onChangeText={handleInputChange} // adiciona todo o texto no log em tempo real

      />

        
        <Button title="Adicionar" onPress={handleAddNewSkill} activeOpacity={0.1}/>

        {/* {
            mySkills.map(skill => (
            <SkillCard key={skill.id} skill ={skill.name} activeOpacity={1} />
            ))
        } */}

        {/* <ScrollView>
        {
            mySkills.map(skill => (
            <SkillCard key={skill.id} skill ={skill.name} activeOpacity={1} />
            ))
        }
        </ScrollView> */}

        <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
        <SkillCard 
        key={item.id} 
        skill ={item.name} 
        onPress={() => handleRemoveSkill(item.id)} 
        activeOpacity={1} 
        />   
        )}
        />

    {/* <Text style={styles.textFooter}>{newSkill}</Text> */}
    </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
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
    greetings:{
        color: "#fff"
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