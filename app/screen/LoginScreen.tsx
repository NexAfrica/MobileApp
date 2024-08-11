import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text,  TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import icons from '@/constants/icons';
import { Colors } from '@/constants/Colors';
import Checkbox from 'expo-checkbox';
import axios from 'axios';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify,setEmailVerify] =useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify,setPasswordVerify]=useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  function handleEmail(email:string){
    setEmail(email)
    setEmailVerify(false)
    if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(email)){
      setEmail(email)
      setEmailVerify(true)
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
  const handleLogin = async () => {
        if ( email.length < 1 || !emailVerify || password.length < 1 || !passwordVerify ) {
      setError('Please fill out all fields correctly.');
      return;
  }
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://backend-app-umnt.onrender.com/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // @ts-ignore
        navigation.navigate('screen/UserScreen'); 
      } else {
        console.error('Unexpected response status:', response.status);
        setError('Login failed');
      }
    } catch (error:any) {
      console.error('Login error:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred during login');
      }
    } finally {
      setLoading(false);
    }
  };
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
        value={email}
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

    <View >
        <Text style={styles.formTxt}>Password</Text>
        <Input
        placeholder="Please Enter Your Password"
        isPasword={true}
        value={password}
        onChangeText={handlePassword}
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


{error ? (
          <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</Text>
        ) : null}

        <Button
          title={loading ? 
          <ActivityIndicator
          color={'white'}
          size={'small'}
          />
            : 'Sign in'}
          onPress={handleLogin}
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