import { StyleSheet, Text, View,ScrollView,Pressable } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Ionicons} from "@expo/vector-icons";

const CartScreen = () => {

    const total = 1;

    return (
        <ScrollView style={{marginTop: 50}}>
            {total === 0 ? (
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={{marginTop: 40}}>Your cart is empty</Text>
                </View>
            ) : (
                <>
                    <View style={{padding: 10, flexDirection: "row", alignItems: "center"}}>
                        <Ionicons  name="arrow-back" size={24} color="black"/>
                        <Text>Your Bucket</Text>
                    </View>
                    <Pressable style={{
                        backgroundColor: "white",
                        borderRadius: 12,
                        marginLeft: 10,
                        marginRight: 10,
                        padding: 14
                    }}>

                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}} >
                            <Text style={{width: 100, fontSize: 16, fontWeight: "500"}}>T-shirt</Text>

                            <Pressable
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 12,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    padding: 14,
                                }}
                            >

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 12,
                                    }}

                                >
                                    <Text style={{width: 100, fontSize: 16, fontWeight: "500"}}>
                                        Shorts
                                    </Text>

                                    <Pressable
                                        style={{
                                            flexDirection: "row",
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                            alignItems: "center",
                                            borderColor: "#BEBEBE",
                                            borderWidth: 0.5,
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Pressable
                                            onPress={() => {

                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 6,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                -
                                            </Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text
                                                style={{
                                                    fontSize: 19,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 8,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Item quantity
                                            </Text>
                                        </Pressable>

                                        <Pressable
                                            onPress={() => {

                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 6,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                +
                                            </Text>
                                        </Pressable>
                                    </Pressable>

                                    <Text style={{fontSize: 16, fontWeight: "500"}}>
                                        Price
                                    </Text>
                                </View>

                            </Pressable>

                            <Text style={{fontSize: 16, fontWeight: "500"}}>Price</Text>
                        </View>

                    </Pressable>

                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
                            Billing Details
                        </Text>
                        <View
                            style={{
                                backgroundColor: "white",
                                borderRadius: 7,
                                padding: 10,
                                marginTop: 15,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                                >
                                    Item Total
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                                    £ 1550 EGP
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginVertical: 8,
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                                >
                                    Delivery Fee | 1.2KM
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: "400",
                                        color: "#088F8F",
                                    }}
                                >
                                    FREE
                                </Text>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text
                                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                >
                                    Free Delivery on Your order
                                </Text>
                            </View>

                            <View
                                style={{
                                    borderColor: "gray",
                                    height: 1,
                                    borderWidth: 0.5,
                                    marginTop: 10,
                                }}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginVertical: 10,
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                >
                                    selected Date
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: "400",
                                        color: "#088F8F",
                                    }}
                                >
                                    {/* {route.params.pickUpDate} */}
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                >
                                    No Of Days
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: "400",
                                        color: "#088F8F",
                                    }}
                                >
                                    3 Days
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginVertical: 10,
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                >
                                    selected Pick Up Time
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: "400",
                                        color: "#088F8F",
                                    }}
                                >
                                    1:00 AM

                                </Text>
                            </View>
                            <View
                                style={{
                                    borderColor: "gray",
                                    height: 1,
                                    borderWidth: 0.5,
                                    marginTop: 10,
                                }}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginVertical: 8,
                                }}
                            >
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                    To Pay
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                    1000
                                </Text>
                            </View>

                        </View>
                    </View>
                </>
            )}
            {total === 0 ? null : (
                <Pressable
                    style={{
                        backgroundColor: "#088F8F",
                        marginTop: "auto",
                        padding: 10,
                        marginBottom: 40,
                        margin: 15,
                        borderRadius: 7,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
                            3 items | £ 90
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "400",
                                color: "white",
                                marginVertical: 6,
                            }}
                        >
                            extra charges might apply
                        </Text>
                    </View>

                    <Pressable>
                        <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
                            Proceeded to cart
                        </Text>
                    </Pressable>
                </Pressable>
            )}
        </ScrollView>
    )
}

export default CartScreen

