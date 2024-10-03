"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileCreateManyInput = class FileCreateManyInput {
};
exports.FileCreateManyInput = FileCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateManyInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateManyInput.prototype, "taskId", void 0);
exports.FileCreateManyInput = FileCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateManyInput", {})
], FileCreateManyInput);
