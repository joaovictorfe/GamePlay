"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Guild_1 = require("../../components/Guild");
var style_1 = require("./style");
var ListDivider_1 = require("../../components/ListDivider");
var Guilds = function (_a) {
    var handleGuildSelect = _a.handleGuildSelect;
    var guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'Image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Noobs',
            icon: 'Image.png',
            owner: true
        }
    ];
    return (react_1["default"].createElement(react_native_1.View, { style: style_1["default"].container },
        react_1["default"].createElement(react_native_1.FlatList, { data: guilds, keyExtractor: function (item) { return item.id; }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(Guild_1["default"], { data: item, onPress: function () { return handleGuildSelect(item); } }));
            }, showsVerticalScrollIndicator: false, ItemSeparatorComponent: function () { return react_1["default"].createElement(ListDivider_1["default"], null); }, style: style_1["default"].guilds })));
};
exports["default"] = Guilds;
