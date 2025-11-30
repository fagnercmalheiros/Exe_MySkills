import { StyleSheet,Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
    title : string
}

export function Button({title, ...rest} : ButtonProps){
    return(
    <TouchableOpacity 
        style={styles.button}
        {...rest}
        >

        <Text 
            style={styles.buttonText}
        >
            {title}
        </Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
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
    }
})
