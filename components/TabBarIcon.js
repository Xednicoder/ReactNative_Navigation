import React from "react";
import Proptypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Colors";

const TabBarIcon = ({ name, focused }) => <Ionicons size={30} name={name} color={focused ? ACTIVE_COLOR : INACTIVE_COLOR} />;

TabBarIcon.propTypes = {
    name: Proptypes.string.isRequired,
    focused: Proptypes.bool.isRequired
};

export default TabBarIcon;