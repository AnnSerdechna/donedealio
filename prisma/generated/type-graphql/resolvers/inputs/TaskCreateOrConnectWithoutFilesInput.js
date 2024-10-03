"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutFilesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutFilesInput_1 = require("../inputs/TaskCreateWithoutFilesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutFilesInput = class TaskCreateOrConnectWithoutFilesInput {
};
exports.TaskCreateOrConnectWithoutFilesInput = TaskCreateOrConnectWithoutFilesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutFilesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput)
], TaskCreateOrConnectWithoutFilesInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutFilesInput = TaskCreateOrConnectWithoutFilesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutFilesInput", {})
], TaskCreateOrConnectWithoutFilesInput);
