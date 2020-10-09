"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.rootResolver = void 0;
var graphql_1 = require("graphql");
exports.rootResolver = {
    quoteOfTheDay: function () {
        return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: function () {
        return Math.random();
    },
    rollThreeDice: function () {
        return [1, 2, 3].map(function (_) { return 1 + Math.floor(Math.random() * 6); });
    },
    rollDice: function (args) {
        var output = [];
        for (var i = 0; i < args.numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
        }
        return output;
    }
};
exports.schema = graphql_1.buildSchema("\n  type Query {\n    quoteOfTheDay: String\n    random: Float!\n    rollThreeDice: [Int],\n    rollDice(numDice: Int!, numSides: Int): [Int]\n  }\n");
