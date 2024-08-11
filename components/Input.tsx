import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Input(props:any) {
    // function onChangeText(text:String) {
    //     props.onInputChange(props.id, text)
    // }

    const [isPasswordVisible,setPasswordVisible]=useState(false)

    const togglePasswordVisibility=()=>{
        setPasswordVisible(!isPasswordVisible)
    }
  return (
    
    <View style={styles.container}>
        <View style={[styles.inputContainer,{borderColor:'rgba(31, 31, 31, 0.30)'}]}>
            <TextInput 
            {...props}
            style={styles.input}
            onChangeText={props.onChangeText}
        placeholderTextColor='rgba(31, 31, 31, 0.30)'
        secureTextEntry={props.isPasword && !isPasswordVisible}
            placeholder={props.placeholder}
            // placeholderTextColor={props.placeholderTextColor}
            />
{/* {props.icon && <Image source={props.icon}/>} */}
{props.isPasword && <TouchableOpacity onPress={togglePasswordVisibility}>
    {/* <Image 
    source={isPasswordVisible?require():require()
    }
    style={styles.icon}

    /> */}
    <Feather
    name={isPasswordVisible?'eye-off':'eye'
       
    }
    style={{marginLeft:10}}
    color={isPasswordVisible?'rgba(31, 31, 31, 0.30)':'black'}
    size={23}
    />
    </TouchableOpacity>}


        </View>
        {
            props.errorText &&(
                <View>
                    <Text >{props.errorText[0]}</Text>
                    </View>
            )
        }
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        width:'100%',

    },
    inputContainer:{
        display:'flex',
        alignItems:'center',  
        justifyContent: 'space-between',
        width:'100%',
        backgroundColor:'white',
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:50,
        borderWidth:1,
        marginVertical:5,
        flexDirection:'row'
    },
    input:{
        fontSize:14,
        fontWeight:'regular',
        color:'black'
    },
    icon:{
        width:20,
        height:20,
        marginLeft:10,
    }
})

export default Input