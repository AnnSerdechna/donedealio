"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedOneWithoutFilesInput_1 = require("../inputs/TaskCreateNestedOneWithoutFilesInput");
let FileCreateInput = class FileCreateInput {
};
exports.FileCreateInput = FileCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutFilesInput_1.TaskCreateNestedOneWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedOneWithoutFilesInput_1.TaskCreateNestedOneWithoutFilesInput)
], FileCreateInput.prototype, "task", void 0);
exports.FileCreateInput = FileCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateInput", {})
], FileCreateInput);
