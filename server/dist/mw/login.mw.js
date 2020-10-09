"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_config_1 = __importDefault(require("../config/passport.config"));
exports.default = passport_config_1.default.authenticate('login', { session: false });
