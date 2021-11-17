import react from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("screen").width / 1.8 - 30;

const Counches = () => {
  return (
    <TouchableOpacity onPress={this.props.onPress}>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
        }}
      >
        <View style={styles.card}>
          <Image
            style={{
              width: 160,
              height: 220,
              marginTop: -60,
              borderRadius: 10,
            }}
            source={this.props.assets}
          />
          <TouchableOpacity style={styles.buttons}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              NEW
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingTop: 20,
              color: "#143a5c",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Hallingdal Chair
          </Text>
          <View
            style={{
              paddingTop: 2,
              flexDirection: "row",
            }}
          >
            <Entypo name="star" size={12} color="#e3d322" />
            <Entypo name="star" size={12} color="#e3d322" />
            <Entypo name="star" size={12} color="#e3d322" />
            <Entypo name="star" size={12} color="#e3d322" />
            <Entypo name="star" size={12} color="#e3d322" />
          </View>
          <Text
            style={{
              paddingTop: 20,
              color: "#143a5c",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Hay
          </Text>
          <Text
            style={{
              paddingTop: 2,
              color: "#c9c9c3",
            }}
          >
            $400
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Counches;

const styles = StyleSheet.create({
  card: {
    height: 350,
    backgroundColor: "white",
    width,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
  },
  buttons: {
    alignSelf: "baseline",
    backgroundColor: "#4892d4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#143a5c",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 3.25,
    shadowRadius: 3.5,
    elevation: 3,
  },
});
