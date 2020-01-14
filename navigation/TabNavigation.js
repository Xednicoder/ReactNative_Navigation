import React from "react";
import { Platform } from "react-native";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import StudioScreen from "../screens/Studios";
import ModelScreen from "../screens/Models";
import SerchScreen from "../screens/Search";
import TabBarIcon from "../components/TabBarIcon";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator({
    STUDIO: {
        screen: createStackNavigator({ Studio: {screen: StudioScreen, navigationOptions: {tittle: 'Studios'}} }),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-camera" : "md-camera"} />)
        }
    },
    MODEL: {
        screen: createStackNavigator({ ModelScreen }),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-woman" : "md-woman"} />)
        }
    },
    SERCH: {
                screen: createStackNavigator({ SerchScreen }),
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"} />)
        }
    }
},
    {
        tabBarOptions: {
            showLabel: false,
            Style: {
                background: BG_COLOR
            }
        }

    });

export default createAppContainer(TabNavigation);
