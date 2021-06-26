"use strict";
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var style_1 = require("./style");
var Profile_1 = require("../../components/Profile");
var ButtonAdd_1 = require("../../components/ButtonAdd");
var CategorySelect_1 = require("../../components/CategorySelect");
var ListHeader_1 = require("../../components/ListHeader");
var Appointment_1 = require("../../components/Appointment");
var ListDivider_1 = require("../../components/ListDivider");
var Background_1 = require("../../components/Background");
var native_1 = require("@react-navigation/native");
function Home() {
    var navigation = native_1.useNavigation();
    var _a = react_1.useState(''), category = _a[0], setCategory = _a[1];
    var appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                ownoer: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendário',
                icon: null,
                ownoer: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
        }
    ];
    function handleCategorySelect(categoryId) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }
    function handleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }
    return (react_1["default"].createElement(Background_1.Background, null,
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: style_1.style.header },
                react_1["default"].createElement(Profile_1.Profile, null),
                react_1["default"].createElement(ButtonAdd_1["default"], { onPress: handleAppointmentCreate })),
            react_1["default"].createElement(CategorySelect_1["default"], { categorySelected: category, setCategory: handleCategorySelect, hasCheckBox: true }),
            react_1["default"].createElement(react_native_1.View, { style: style_1.style.content },
                react_1["default"].createElement(ListHeader_1["default"], { title: "Partidas agendadas", subtitle: "Total 6" }),
                react_1["default"].createElement(react_native_1.FlatList, { data: appointments, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                        var item = _a.item;
                        return (react_1["default"].createElement(Appointment_1["default"], { data: item, onPress: handleAppointmentDetails }));
                    }, ItemSeparatorComponent: function () { return react_1["default"].createElement(ListDivider_1["default"], null); }, style: style_1.style.matches, showsVerticalScrollIndicator: false })))));
}
exports.Home = Home;
