"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateManyTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileCreateManyTaskInput = class FileCreateManyTaskInput {
};
exports.FileCreateManyTaskInput = FileCreateManyTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileCreateManyTaskInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateManyTaskInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateManyTaskInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateManyTaskInput.prototype, "name", void 0);
exports.FileCreateManyTaskInput = FileCreateManyTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateManyTaskInput", {})
], FileCreateManyTaskInput);
