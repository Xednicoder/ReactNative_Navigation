import React from "react";
import { Platform } from "react-native";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import StudioScreen from "../screens/Studios";
import ModelScreen from "../screens/Models";
import SerchScreen from "../screens/Search";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR } from "../constants/Colors";
import { createStack } from "./config";


const TabNavigation = createBottomTabNavigator({
    STUDIO: {
        screen: createStack(StudioScreen, "Studio"),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-camera" : "md-camera"} />)
        }
    },
    MODEL: {
        screen: createStack(ModelScreen, "Model"),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-woman" : "md-woman"} />)
        }
    },
    SERCH: {
        screen: createStack(SerchScreen, "Serch"),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"} />)
        }
    }
},
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }

    });

export default createAppContainer(TabNavigation);
