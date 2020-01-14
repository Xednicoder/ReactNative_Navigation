import React from "react";
import { Text, TouchableOpacity } from "react-native";
export default ({navigation}) => (
    <>
        <Text>Studios</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <Text>Go To Detail</Text>
        </TouchableOpacity>
    </>
);
