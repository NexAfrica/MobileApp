import React, { useState } from 'react'
import { Image, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import icons from '@/constants/icons';
import { Colors } from '@/constants/Colors';
import Checkbox from 'expo-checkbox';

export default function LoginScreen() {
    const navigation = useNavigation();
  const [isChecked, setChecked]=useState(false)
    return (
    
    <View style={styles.container}>

<View>
<TouchableOpacity  
 // @ts-ignore
onPress={()=> navigation.navigate ('screen/home')}>
<AntDesign name="arrowleft" size={24} color="black" />

      </TouchableOpacity>

</View>

<KeyboardAwareScrollView>
  <View style={styles.upperContainer}>
  <Text style={styles.wlcmTxt}>Hi, Welcome Back!👋</Text>

<Text style={{color:'rgba(31, 31, 31, 0.30)'}}>Please enter your email and password to sign in</Text>

  </View>
<View style={styles.formContainer}>

    <View>
        <Text style={styles.formTxt}>Email/Username</Text>
        <Input
        placeholder="Please Enter Your Email"
      />
    </View>

    <View >
        <Text style={styles.formTxt}>Password</Text>
        <Input
        placeholder="Please Enter Your Password"
      />
    </View>

</View>


    <View>
      <View style={styles.CheckboxContainer}>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Checkbox 
style={styles.checkbox}
value={isChecked}
color={isChecked? Colors.light.backgroundColor:undefined}
onValueChange={setChecked}
/>
<Text>
        Remember Me
        </Text>
</View>
<TouchableOpacity
 // @ts-ignore
onPress={()=> navigation.navigate ('screen/ForgotScreen')}
>
  <Text style={{color:'red'}}>
  Forgot Password
  </Text>
</TouchableOpacity>
      </View>
</View>
</KeyboardAwareScrollView>
<View>
<Button
title='Sign in'
 // @ts-ignore
onPress={()=> navigation.navigate ('screen/SignupScreen')}
/>
      <Text style={styles.otherTxt}>Or using other method</Text>
      <View style={styles.otherMethodCont} >
        <View style={styles.otherMethod}>
            <View>
            <Image source={icons.google}/>

            </View>
            <View>
            <Text>Continue with Google</Text>

            </View>
        </View>
        <View style={styles.otherMethod}>
            <View>
            <Image source={icons.apple}/>

            </View>
            <View>
            <Text>Continue with Apple</Text>

            </View>
        </View>

      </View>
</View>
<View style={styles.signuptxt}>
    <Text style={styles.signuptxt}>Don’t have an account ?
      
      <Text 
       // @ts-ignore
      onPress={() => {  navigation.navigate('screen/SignupScreen') }} style={styles.signtxt}>Sign Up</Text>

      </Text>
</View>


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:30,
        paddingVertical:50,
    },
    upperContainer:{
paddingTop:30,
    },
    wlcmTxt:{
      fontSize:25,
      fontWeight:'bold',
    },

    formContainer:{
      paddingTop:30,
      rowGap:10,
    },
    formTxt:{
      fontWeight:'bold'
    },

    CheckboxContainer:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
marginVertical:18,
    },
    checkbox:{
      marginRight:8,
      height:16,
      width:16,
    },
    signtxt:{
      color:Colors.light.textPrimary,
      fontWeight:'bold',
  },
  otherTxt:{
    paddingVertical:20,
    textAlign:'center',
  },
  otherMethodCont:{
    display:'flex',
    flexDirection:'column',
    rowGap:10,
  },
  otherMethod:{
    display:'flex',
    flexDirection:'row',
    borderColor:'rgba(31, 31, 31, 0.05)',
    borderWidth:2,
    alignItems:'center',  
    justifyContent: "center",
    paddingVertical: 16,
  borderRadius:50,
  columnGap:10,
  },
  signuptxt:{
paddingVertical:30,
textAlign:'center',
color:'rgba(31, 31, 31, 0.30)'
  },


  
  });