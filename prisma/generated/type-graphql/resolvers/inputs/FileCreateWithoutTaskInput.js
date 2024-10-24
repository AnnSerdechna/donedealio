"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileCreateWithoutTaskInput = class FileCreateWithoutTaskInput {
};
exports.FileCreateWithoutTaskInput = FileCreateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateWithoutTaskInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateWithoutTaskInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateWithoutTaskInput.prototype, "name", void 0);
exports.FileCreateWithoutTaskInput = FileCreateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateWithoutTaskInput", {})
], FileCreateWithoutTaskInput);
