import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { VStack } from "native-base";
import cambutton from "./cambutton.png";
import profile from "./profile.png";
import food from "./food.png";
import { Camera } from "expo-camera";
import restaurant from "./restaurant.png";

const primaryCardShadow = {
  shadowColor: "#cb5eee",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.5,
  shadowRadius: 4.65,
  elevation: 8,
};

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

  // useEffect(() => {
  //   (async () => {
  //     console.log("Hello World");
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  if (true) {
    return <Profile />;
  }

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

function Profile() {
  //TODO: Import the font
  return (
    <View
      style={{
        flexDirection: "column",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 3 }}>
          <img
            src={profile}
            style={{
              borderRadius: 40,
              borderWidth: 5,
              borderColor: "white",
              paddingTop: "20px",
            }}
          />
        </View>

        <View style={{ flex: 6 }}>
          <h1 style={{ marginTop: "auto", marginBottom: 0, fontSize: 18 }}>
            Ivan Zhang
          </h1>
          <p style={{ marginTop: 0, marginBottom: "auto", fontSize: 12 }}>
            {" "}
            0xde0B295669...c85E40f4cb697BAe
          </p>
        </View>
      </View>
      <h1 style={{ color: "#CB5EEE", fontSize: 20 }}> Showcase</h1>
      {[1, 2, 3].map((value) => {
        return (
          <>
            <Showcase /> <br></br>
          </>
        );
      })}
      <h1 style={{ color: "#CB5EEE", fontSize: 20 }}> Places </h1>

      {[1, 2, 3].map((value) => {
        return (
          <>
            <Places /> <br></br>
          </>
        );
      })}

      <Friends />
    </View>
  );
}

function Showcase() {
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={[
          {
            flexDirection: "row",
            borderRadius: "10px",
          },
          primaryCardShadow,
        ]}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <img
            src={restaurant}
            style={{
              borderRadius: 40,
              borderWidth: 5,
              borderColor: "white",
              height: "100%",
              width: "75%",
            }}
          />
        </View>
        <View style={{ flex: 6 }}>
          <h1
            style={{
              marginTop: "auto",

              marginBottom: 0,
              fontSize: 24,
              color: "#CB5EEE",
            }}
          >
            Burma Love
          </h1>
          <h2
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontSize: 16,
              color: "#FFD500",
            }}
          >
            Star Patron
          </h2>
          <p
            style={{
              marginTop: 0,
              fontSize: 16,
              marginBottom: "auto",
              color: "#C4C4C4",
            }}
          >
            Since December 2nd, 2018
          </p>
        </View>
      </View>
    </View>
  );
}

function Places() {
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={[
          {
            flexDirection: "row",
          },
        ]}
      >
        <View style={{ flex: 3 }}>
          <img src={food} style={{ height: "100%", width: "100%" }} />
        </View>
        <View style={{ flex: 6, paddingLeft: "10px" }}>
          <h1
            style={{
              marginTop: 0,
              marginBottom: 0,
              fontSize: 20,
            }}
          >
            Alive & Kicking Lobsters
          </h1>
          <p style={{ marginTop: 0, color: "#C4C4C4" }}>
            Since December 2nd, 2018
          </p>
        </View>
      </View>
    </View>
  );
}

function Friends() {
  return <Text> Hello World </Text>;
}
