"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutWorkspaceInput_1 = require("../inputs/TaskCreateWithoutWorkspaceInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutWorkspaceInput = class TaskCreateOrConnectWithoutWorkspaceInput {
};
exports.TaskCreateOrConnectWithoutWorkspaceInput = TaskCreateOrConnectWithoutWorkspaceInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutWorkspaceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutWorkspaceInput_1.TaskCreateWithoutWorkspaceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutWorkspaceInput_1.TaskCreateWithoutWorkspaceInput)
], TaskCreateOrConnectWithoutWorkspaceInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutWorkspaceInput = TaskCreateOrConnectWithoutWorkspaceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutWorkspaceInput", {})
], TaskCreateOrConnectWithoutWorkspaceInput);
