"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateToOneWithWhereWithoutFilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutFilesInput_1 = require("../inputs/TaskUpdateWithoutFilesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpdateToOneWithWhereWithoutFilesInput = class TaskUpdateToOneWithWhereWithoutFilesInput {
};
exports.TaskUpdateToOneWithWhereWithoutFilesInput = TaskUpdateToOneWithWhereWithoutFilesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateToOneWithWhereWithoutFilesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutFilesInput_1.TaskUpdateWithoutFilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutFilesInput_1.TaskUpdateWithoutFilesInput)
], TaskUpdateToOneWithWhereWithoutFilesInput.prototype, "data", void 0);
exports.TaskUpdateToOneWithWhereWithoutFilesInput = TaskUpdateToOneWithWhereWithoutFilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutFilesInput", {})
], TaskUpdateToOneWithWhereWithoutFilesInput);
