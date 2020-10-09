"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var jwt_config_1 = require("../config/jwt.config");
exports.generateToken = function (user) { return jsonwebtoken_1.sign({ id: user.id }, jwt_config_1.jwtSecret); };
