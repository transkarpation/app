"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var login_mw_1 = __importDefault(require("../mw/login.mw"));
var register_mw_1 = __importDefault(require("../mw/register.mw"));
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var r = express_1.Router();
r.post('/login', login_mw_1.default, auth_controller_1.default.sendUser);
r.post('/register', register_mw_1.default, auth_controller_1.default.sendUser);
r.get('/loguot', function () { });
exports.default = r;
