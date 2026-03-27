import { Image, Text, View } from "react-native";
export default function Header() {
  return (
    <View>
      {/* container with heading and logo */}
      <View>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text>Dev Habit</Text>
      </View>
      {/* container with settings and notifications bell */}
      <View></View>
    </View>
  );
}
