"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedOneWithoutFilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutFilesInput_1 = require("../inputs/TaskCreateOrConnectWithoutFilesInput");
const TaskCreateWithoutFilesInput_1 = require("../inputs/TaskCreateWithoutFilesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedOneWithoutFilesInput = class TaskCreateNestedOneWithoutFilesInput {
};
exports.TaskCreateNestedOneWithoutFilesInput = TaskCreateNestedOneWithoutFilesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput)
], TaskCreateNestedOneWithoutFilesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutFilesInput_1.TaskCreateOrConnectWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutFilesInput_1.TaskCreateOrConnectWithoutFilesInput)
], TaskCreateNestedOneWithoutFilesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateNestedOneWithoutFilesInput.prototype, "connect", void 0);
exports.TaskCreateNestedOneWithoutFilesInput = TaskCreateNestedOneWithoutFilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedOneWithoutFilesInput", {})
], TaskCreateNestedOneWithoutFilesInput);
