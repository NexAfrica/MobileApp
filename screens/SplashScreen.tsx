import { Image, Text, View } from "react-native";
import SplashImage from '../assets/images/splashImage.png'

export default function SplashScreen(){
    return (

        <View>
            <View>
<Image  source={SplashImage} />
            </View>
            <View>
                <Text>
                Empowering Dreams, Bridging Worlds:NexAfrica Welcomes You.

                </Text>
            </View>
        </View>
    )

    
}