import Button from '@/components/Button';
import Input from '@/components/Input';
import { Colors } from '@/constants/Colors';
import icons from '@/constants/icons';
import { AntDesign, Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignupScreen() {
    const navigation = useNavigation();

    const [name,setName]=useState('');
    const [nameVerify,setNameVerify] =useState(false);
    const [email,setEmail] =useState('');
    const [emailVerify,setEmailVerify] =useState(false);
    const [userName,setUserName]=useState('')
    const [userNameVerify,setUserNameVerify]=useState(false);
    const [password, setPassword]=useState('');
    const [passwordVerify,setPasswordVerify]=useState(false);
    const [confirmPassword, setConfirmPassword]=useState('');

    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');    

    
    function handleName(name:string){
      setName(name)
      if(name.length > 1){
        setNameVerify(true)
      }
    }

  function handleEmail(email:string){
    setEmail(email)
    setEmailVerify(false)
    if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(email)){
      setEmail(email)
      setEmailVerify(true)
    }
  }

  function handleUserName(userName:string){
    setUserName(userName)
    if(userName.length > 1){
      setUserNameVerify(true)
    }
  }
  function handlePassword(password:string){
    setPassword(password)
    setPasswordVerify(false)
    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)){
      setPassword(password);
      setPasswordVerify(true)
    }
  }

  function handleconfPassword(confirmPassword:string){
    
    setConfirmPassword(confirmPassword)
    
  }
  

    const handleSignup = async () => {

  //   if (name.length < 1 || !nameVerify || email.length < 1 || !emailVerify || userName.length < 1 || !userNameVerify || password.length < 1 || !passwordVerify || confirmPassword !== password) {
  //     setError('Please fill out all fields correctly.');
  //     return;
  // }

  setLoading(true);
  setError('');
  //   try {
  //     const response = await axios.post('https://backend-app-umnt.onrender.com/signup', {
  //         fullname: name,
  //         email,
  //         password,
  //         userName
  //     });

  //     if (response.data.ok) {
  //         // Handle successful signup, e.g., navigate to login or home screen
  //         navigation.navigate('screen/HomeScreen'); // or any other screen you want to navigate to
  //     } else {
  //         setError(response.data.message || 'Something went wrong');
  //     }
  // } catch (err) {
  //     setError(err.response?.data?.message || 'An error occurred');

  // } finally {
  //     setLoading(false);
  // }
    
  try {
    const response = await axios.post('https://backend-app-umnt.onrender.com/signup', {
        fullname: name,
        email,
        password,
        userName,
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 201) {
        console.log('Signup successful:', response.data);
               // @ts-ignore
               navigation.navigate('screen/LoginScreen');
    } else {
        console.error('Unexpected response status:', response.status);
        setError('Signup failed');
    }
} catch (error:any) {
    console.error('Signup error:', error);
    if (error.response && error.response.data) {
        setError(error.response.data.message);
    } else {
        setError('An error occurred during signup');
    }
} finally {
    setLoading(false);
}

  }







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
  <View>
  <Text style={styles.wlcmTxt}>Create an account</Text>
  <Text style={{color:'rgba(31, 31, 31, 0.30)'}}>Enter your details to create an account</Text>
  </View>
<View style={styles.formContainer}>

    <View>
        <Text style={styles.formTxt}>Full Name</Text>
        <Input
        placeholder="Please Enter Your Full Name"
        placeholderTextColor=''
        onChangeText={handleName}        
        
        />
  {name.length<1 ? null:nameVerify ?null:(
    <Text
    style={{
      marginLeft:10,
      color:'red',
    }}
    >
      Name should be more than 1 characters
    </Text>
  )}

    </View>
    <View>
        <Text style={styles.formTxt} >Username</Text>
        <Input
        placeholder="Please Enter Your Username"
        onChangeText={handleUserName}
      />
              {userName.length<1 ? null:userNameVerify ?null:(
    <Text
    style={{
      marginLeft:10,
      color:'red',
    }}
    >
      Username should be more than 1 characters
    </Text>
  )}
    </View>
    <View>
        <Text style={styles.formTxt}>Email</Text>
        <Input
        placeholder="Please Enter Your Email"
        onChangeText={handleEmail}    
      />
        {email.length<1 ? null:emailVerify ?null:(
    <Text
    style={{
      marginLeft:10,
      color:'red',
    }}
    >
      Enter Proper Email Address
    </Text>
  )}
    </View>
    <View>
        <Text style={styles.formTxt}>Password</Text>
        <Input
        placeholder="Please Enter Your Password"
        isPasword={true}
        onChangeText={handlePassword}    

      />

    </View>
    <View>
        <Text style={styles.formTxt}>Confirm Password</Text>
        <Input
        placeholder="Please Enter Your Password"
        isPasword={true}
        onChangeText={handleconfPassword}    

      />
              {confirmPassword !== password && (
    <Text
    style={{
      marginLeft:10,
      color:'red',
    }}
    >
      The password should be the same
    </Text>
  )}
    </View>
</View>

<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center', columnGap:10,paddingVertical:20}}>


<View>
{
    password.length < 1 ?null:passwordVerify?(
      <Feather
      name='check-circle'
      color='green'
      size={20}
      />
    ):(
      <MaterialIcons
      name='error'
      color='red'
      size={20}
      />

    )
  }
</View>

<View>
<Text>
  Password must be at least 8 character, uppercase, 
  lowercase, and unique code like #%!
  </Text>
</View>
</View>


<View>


{error ? (
                    <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</Text>
                ) : null}


<Button
                        title={loading ?          
                           <ActivityIndicator
                          color={'white'}
                          size={'small'}
                          /> 
                          : 'Create account'}
                        onPress={handleSignup}
                        disabled={loading}
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
<View>
    <Text style={styles.signuptxt}>Already have an account ? 
      
      <Text 
       // @ts-ignore
      onPress={() => {  navigation.navigate('screen/LoginScreen') }} style={styles.signtxt}>Sign In</Text>

      </Text>
</View>
</KeyboardAwareScrollView>

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
    paddingTop:30,
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
paddingVertical:40,
textAlign:'center',
color:'rgba(31, 31, 31, 0.30)'
},



});