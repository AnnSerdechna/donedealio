"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TaskOrderByWithRelationInput_1 = require("../inputs/TaskOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FileOrderByWithRelationInput = class FileOrderByWithRelationInput {
};
exports.FileOrderByWithRelationInput = FileOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileOrderByWithRelationInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FileOrderByWithRelationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput)
], FileOrderByWithRelationInput.prototype, "task", void 0);
exports.FileOrderByWithRelationInput = FileOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileOrderByWithRelationInput", {})
], FileOrderByWithRelationInput);
