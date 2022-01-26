import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import cambutton from "./cambutton.png";
import { Camera } from "expo-camera";

// export default function App() {
//   return (
//     <View style={style.container}>
//       <CameraScan />
//     </View>
//   );
// }

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      console.log("Hello World");
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={console.log("Yay!")}
            style={{
              height: 80,
              width: 80,
              resizeMode: "contain",
              marginTop: "auto",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img src={cambutton} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
