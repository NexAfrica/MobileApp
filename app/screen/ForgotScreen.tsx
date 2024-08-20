import Button from "@/components/Button";
import Input from "@/components/Input";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";

export default function ForgotScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => {
            // @ts-ignore
              navigation.navigate("screen/LoginScreen");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.wlcmTxt}>Forgot Password</Text>
        </View>
        <View></View>
      </View>
      <View>
        <Text>
          Input your linked email to your Movees account below, we’ll send you a
          link
        </Text>
      </View>
      <View>
        <Text style={styles.formTxt}>Email</Text>
        <Input placeholder="Please Enter Your Email" />
      </View>

      <OTPTextView
        textInputStyle={styles.OTPStyle}
        inputCount={4}
        tintColor={"black"}
      />
      <Button
        title="Continue"
        // @ts-ignore
        onPress={() => navigation.navigate("screen/SignupScreen")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upperContainer: {
    paddingTop: 30,
  },
  wlcmTxt: {
    fontSize: 25,
    fontWeight: "bold",
  },

  formContainer: {
    paddingTop: 30,
  },
  formTxt: {
    fontWeight: "bold",
  },
  OTPStyle: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    height: 58,
    width: 58,
  },
});
