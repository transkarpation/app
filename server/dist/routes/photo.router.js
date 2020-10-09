"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var photo_controller_1 = __importDefault(require("../controllers/photo.controller"));
var r = express_1.Router();
r.get('/', function (req, res) {
    res.send('get photos');
});
r.get('/:id', function () { });
r.post('/', photo_controller_1.default.save);
r.put('/:id', function () { });
exports.default = r;
