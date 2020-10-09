"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoReq = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var PhotoReq = /** @class */ (function () {
    function PhotoReq() {
    }
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", Number)
    ], PhotoReq.prototype, "id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PhotoReq.prototype, "name", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PhotoReq.prototype, "description", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", String)
    ], PhotoReq.prototype, "filename", void 0);
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", Number)
    ], PhotoReq.prototype, "veiws", void 0);
    __decorate([
        class_transformer_1.Expose(),
        __metadata("design:type", Boolean)
    ], PhotoReq.prototype, "isPublished", void 0);
    return PhotoReq;
}());
exports.PhotoReq = PhotoReq;
