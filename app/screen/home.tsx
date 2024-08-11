import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
// @ts-ignore
import Arrow from "../../assets/images/Arrow.png";
// @ts-ignore
import homeImage from "../../assets/images/image3.png";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.homeHeader}>Nex{"\n"}Africa.</Text>
        <Text style={styles.homeText}>
          Unlock a world of opportunities tailored to your unique skills and
          aspirations. Whether you're seeking full-time employment, internships,
          or freelance projects,{" "}
        </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={homeImage}
          style={styles.homeImage}
          resizeMode="contain"
        />
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        // @ts-ignore
          navigation.navigate("screen/register");
        }}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
        <Image source={Arrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  homeHeader: {
    fontSize: 60,
    fontWeight: "800",
    paddingHorizontal: 22,
    paddingTop: 87,
    lineHeight: 50,
  },
  homeText: {
    fontSize: 14,
    fontWeight: "regular",
    paddingLeft: 22,
    paddingRight: 44,
    textAlign: "left",
  },

  imageWrapper: {
    position: "relative",
    paddingTop: 20,
  },
  homeImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "10%",
  },

  button: {
    backgroundColor: Colors.light.backgroundColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 140,
    position: "absolute",
    bottom: 0,

    justifyContent: "center",
    paddingVertical: 42,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: Colors.light.textSecondary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
