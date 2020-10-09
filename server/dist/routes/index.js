"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var photo_router_1 = __importDefault(require("./photo.router"));
var auth_router_1 = __importDefault(require("./auth.router"));
var request_validate_mw_1 = require("../mw/request.validate.mw");
var Photo_1 = require("../requests/Photo");
var User_1 = require("../requests/User");
var router = express_1.Router();
router.use('/auth', request_validate_mw_1.validate(User_1.UserReq), auth_router_1.default);
router.use('/photos', request_validate_mw_1.validate(Photo_1.PhotoReq), photo_router_1.default);
exports.default = router;
