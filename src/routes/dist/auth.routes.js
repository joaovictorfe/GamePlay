"use strict";
exports.__esModule = true;
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var theme_1 = require("../global/styles/theme");
var Home_1 = require("../screens/Home");
var SignIn_1 = require("../screens/SignIn");
var AppointmentDetails_1 = require("../screens/AppointmentDetails");
var AppointmentCreate_1 = require("../screens/AppointmentCreate");
var _a = stack_1.createStackNavigator(), Navigator = _a.Navigator, Screen = _a.Screen;
var AuthRoutes = function () {
    return (react_1["default"].createElement(Navigator, { headerMode: "none", screenOptions: {
            cardStyle: {
                backgroundColor: theme_1.theme.colors.secondary100
            }
        } },
        react_1["default"].createElement(Screen, { name: "SignIn", component: SignIn_1["default"] }),
        react_1["default"].createElement(Screen, { name: "Home", component: Home_1.Home }),
        react_1["default"].createElement(Screen, { name: "AppointmentDetails", component: AppointmentDetails_1["default"] }),
        react_1["default"].createElement(Screen, { name: "AppointmentCreate", component: AppointmentCreate_1["default"] })));
};
exports["default"] = AuthRoutes;
