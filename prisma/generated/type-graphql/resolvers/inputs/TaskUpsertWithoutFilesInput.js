"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithoutFilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutFilesInput_1 = require("../inputs/TaskCreateWithoutFilesInput");
const TaskUpdateWithoutFilesInput_1 = require("../inputs/TaskUpdateWithoutFilesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpsertWithoutFilesInput = class TaskUpsertWithoutFilesInput {
};
exports.TaskUpsertWithoutFilesInput = TaskUpsertWithoutFilesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutFilesInput_1.TaskUpdateWithoutFilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutFilesInput_1.TaskUpdateWithoutFilesInput)
], TaskUpsertWithoutFilesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput)
], TaskUpsertWithoutFilesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpsertWithoutFilesInput.prototype, "where", void 0);
exports.TaskUpsertWithoutFilesInput = TaskUpsertWithoutFilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithoutFilesInput", {})
], TaskUpsertWithoutFilesInput);
