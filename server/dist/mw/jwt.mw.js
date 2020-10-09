"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = void 0;
var passport_config_1 = __importDefault(require("../config/passport.config"));
function isUrlInWhiteList(url, routesWhiteList) {
    return routesWhiteList.some(function (route) {
        var regExpString = ("^" + route + "$").replace('*', '.*');
        var regExp = new RegExp(regExpString);
        return regExp.test(url);
    });
}
exports.authenticateJwt = function (routesWhiteList) {
    return function (req, res, next) {
        return isUrlInWhiteList(req.originalUrl, routesWhiteList)
            ? next()
            : passport_config_1.default.authenticate('jwt', { session: false })(req, res, next);
    };
};
