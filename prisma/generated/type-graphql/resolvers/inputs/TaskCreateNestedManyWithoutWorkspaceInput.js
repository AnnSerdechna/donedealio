"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedManyWithoutWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyWorkspaceInputEnvelope_1 = require("../inputs/TaskCreateManyWorkspaceInputEnvelope");
const TaskCreateOrConnectWithoutWorkspaceInput_1 = require("../inputs/TaskCreateOrConnectWithoutWorkspaceInput");
const TaskCreateWithoutWorkspaceInput_1 = require("../inputs/TaskCreateWithoutWorkspaceInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedManyWithoutWorkspaceInput = class TaskCreateNestedManyWithoutWorkspaceInput {
};
exports.TaskCreateNestedManyWithoutWorkspaceInput = TaskCreateNestedManyWithoutWorkspaceInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutWorkspaceInput_1.TaskCreateWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutWorkspaceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutWorkspaceInput_1.TaskCreateOrConnectWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutWorkspaceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyWorkspaceInputEnvelope_1.TaskCreateManyWorkspaceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyWorkspaceInputEnvelope_1.TaskCreateManyWorkspaceInputEnvelope)
], TaskCreateNestedManyWithoutWorkspaceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutWorkspaceInput.prototype, "connect", void 0);
exports.TaskCreateNestedManyWithoutWorkspaceInput = TaskCreateNestedManyWithoutWorkspaceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedManyWithoutWorkspaceInput", {})
], TaskCreateNestedManyWithoutWorkspaceInput);
