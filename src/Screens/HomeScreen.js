// import { SafeAreaView, StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
// import React, { useEffect, useState } from "react";
// import { Feather } from "@expo/vector-icons";
// import * as Location from "expo-location";
// import { MaterialIcons } from "@expo/vector-icons";
// import Carousel from "../../components/Carousel";
// import Services from "../../components/Services";
// import DressItem from "../../components/DressItem";
// import Icon from "../../assets/user-icon.png";
// const HomeScreen = () => {
//     const [displayCurrentAddress, setdisplayCurrentAddress] = useState("Loading Your LOCATION");
//     const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
//     useEffect(() => {
//         checkIfLocationEnabled();
//         getCurrentLocation();
//     }, []);
//
//     const checkIfLocationEnabled = async () => {
//         let enabled = await Location.hasServicesEnabledAsync();
//         if (!enabled) {
//             Alert.alert(
//                 "Location services not enabled",
//                 "Please enable the location services",
//                 [
//                     {
//                         text: "Cancel",
//                         onPress: () => console.log("Cancel Pressed"),
//                         style: "cancel",
//                     },
//                     { text: "OK", onPress: () => console.log("OK Pressed") },
//                 ],
//                 { cancelable: false }
//             );
//         } else {
//             setlocationServicesEnabled(enabled);
//         }
//     };
//
//     const getCurrentLocation = async () => {
//         let { status } = await Location.requestForegroundPermissionsAsync();
//
//         if (status !== "granted") {
//             Alert.alert(
//                 "Permission denied",
//                 "allow the app to use the location services",
//                 [
//                     {
//                         text: "Cancel",
//                         onPress: () => console.log("Cancel Pressed"),
//                         style: "cancel",
//                     },
//                     { text: "OK", onPress: () => console.log("OK Pressed") },
//                 ],
//                 { cancelable: false }
//             );
//         }
//
//         const { coords } = await Location.getCurrentPositionAsync();
//         // console.log(coords)
//         if (coords) {
//             const { latitude, longitude } = coords;
//
//             let response = await Location.reverseGeocodeAsync({
//                 latitude,
//                 longitude,
//             });
//
//             // console.log(response)
//
//             for (let item of response) {
//                 let address = `${item.name} ${item.city} ${item.postalCode}`;
//                 setdisplayCurrentAddress(address);
//             }
//         }
//     };
//
//     const services = [
//         {
//             id: "0",
//             image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
//             name: "shirt",
//             quantity: 0,
//             price: 10,
//         },
//         {
//             id: "11",
//             image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
//             name: "T-shirt",
//             quantity: 0,
//             price: 10,
//         },
//         {
//             id: "12",
//             image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
//             name: "dresses",
//             quantity: 0,
//             price: 10,
//         },
//         {
//             id: "13",
//             image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
//             name: "jeans",
//             quantity: 0,
//             price: 10,
//         },
//         {
//             id: "14",
//             image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
//             name: "Sweater",
//             quantity: 0,
//             price: 10,
//         },
//         {
//             id: "15",
//             image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
//             name: "shorts",
//             quantity: 0,
//             price: 10,
//         },
//         {
//             id: "16",
//             image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
//             name: "Sleeveless",
//             quantity: 0,
//             price: 10,
//         },
//     ];
//     return (
//         <ScrollView style={{ backgroundColor: "white", flex: 1, marginTop: 50 }}>
//             <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 30 }}>
//                 <MaterialIcons name="location-on" size={30} color="#6a6a6a" />
//                 <View>
//                     <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
//                     <Text>{displayCurrentAddress}</Text>
//                 </View>
//
//                 <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
//                     <Image
//                         style={{ width: 40, height: 40, borderRadius: 20 }}
//                         source={Icon}
//                     />
//                 </Pressable>
//             </View>
//             {/* searchbar */}
//             <View
//                 style={{
//                     padding: 15,
//                     margin: 10,
//                     flexDirection: "row",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     borderWidth: 0.8,
//                     borderColor: "#C0C0C0",
//                     borderRadius: 24,
//                 }}
//             >
//                 <TextInput style={styles.input} placeholder="Search" />
//                 <Feather name="search" size={24} color="#858585" />
//             </View>
//
//             {/* ImageCar */}
//             <Carousel />
//
//             {/* Services */}
//             <Services />
//
//
//             {/* Render all the Products */}
//             {services.map((item, index) => (
//                 <DressItem item={item} key={index} />
//             ))}
//
//
//         </ScrollView>
//     )
// }
//
// export default HomeScreen
//
// const styles = StyleSheet.create({
//
// input:{
//     fontSize:20,
// },
//
// })
