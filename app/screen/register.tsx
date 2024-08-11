import { Image, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import dashedArrow from "../../assets/images/dashedArrow.png";
// @ts-ignore
import image1 from "../../assets/images/image1.png";
// @ts-ignore
import image2 from "../../assets/images/image2.png";
// @ts-ignore
import image3 from "../../assets/images/image3.png";

import { Colors } from "@/constants/Colors";
import AppIntroSlider from "react-native-app-intro-slider";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/Button";
import { useRef } from "react";

const slides = [
  {
    id: 1,
    imageSource: image1,
    title: "Explore Opportunities",
    description:
      "Discover job openings, educational programs, and career resources tailored to your interests and aspirations.",
  },
  {
    id: 2,
    imageSource: image2,
    title: "Build Your Profile",
    description:
      "Your profile is your digital handshake. Craft it to reflect your professional journey and aspirations.",
  },
  {
    id: 3,
    imageSource: image3,
    title: "Grow Your Network",
    description:
      "Connect with like-minded professionals, mentors, and industry experts. Expand your circle and unlock new opportunities by building meaningful relationships.",
  },
];

export default function Register() {
  const navigation = useNavigation();
  const sliderRef = useRef<AppIntroSlider | null>(null);

  return (
    <View style={styles.container}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.imageWrapper}>
                <Image
                  source={item.imageSource}
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

              <Text style={styles.homeHeader}>{item.title}</Text>
              <Text style={styles.homeText}>{item.description}</Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: Colors.light.backgroundColor,
          width: 30,
        }}
      />

      <View style={styles.subContainer}>
        <Button
          title="Register"
          icon={dashedArrow}
          onPress={() => {
            if (sliderRef.current) {
              const currentIndex = sliderRef.current.state.activeIndex;
              const nextIndex = currentIndex + 1;
              if (nextIndex < slides.length) {
                sliderRef.current.goToSlide(nextIndex);
              } else {
                // @ts-ignore
                navigation.navigate("screen/SignupScreen");
              }
            }
          }}
        />

        <View>
          <Text style={styles.bottomTxt}>
            Already have an account?
            <Text
              onPress={() => {
              // @ts-ignore
                navigation.navigate("screen/LoginScreen");
              }}
              style={styles.signtxt}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  imageWrapper: {
    position: "relative",
    paddingTop: 20,
  },
  homeImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1, // adjust this to match the aspect ratio of your image
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "10%", // adjust this to control the height of the gradient overlay
  },
  homeHeader: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 30,
  },
  homeText: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "regular",
  },
  subContainer: {
    paddingBottom: 50,
  },

  signtxt: {
    color: Colors.light.textPrimary,
    fontWeight: "bold",
  },
  bottomTxt: {
    paddingTop: 30,
    textAlign: "center",
  },
});
