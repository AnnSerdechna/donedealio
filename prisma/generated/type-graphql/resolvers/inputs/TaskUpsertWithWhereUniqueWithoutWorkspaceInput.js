"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithWhereUniqueWithoutWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutWorkspaceInput_1 = require("../inputs/TaskCreateWithoutWorkspaceInput");
const TaskUpdateWithoutWorkspaceInput_1 = require("../inputs/TaskUpdateWithoutWorkspaceInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpsertWithWhereUniqueWithoutWorkspaceInput = class TaskUpsertWithWhereUniqueWithoutWorkspaceInput {
};
exports.TaskUpsertWithWhereUniqueWithoutWorkspaceInput = TaskUpsertWithWhereUniqueWithoutWorkspaceInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpsertWithWhereUniqueWithoutWorkspaceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutWorkspaceInput_1.TaskUpdateWithoutWorkspaceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutWorkspaceInput_1.TaskUpdateWithoutWorkspaceInput)
], TaskUpsertWithWhereUniqueWithoutWorkspaceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutWorkspaceInput_1.TaskCreateWithoutWorkspaceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutWorkspaceInput_1.TaskCreateWithoutWorkspaceInput)
], TaskUpsertWithWhereUniqueWithoutWorkspaceInput.prototype, "create", void 0);
exports.TaskUpsertWithWhereUniqueWithoutWorkspaceInput = TaskUpsertWithWhereUniqueWithoutWorkspaceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutWorkspaceInput", {})
], TaskUpsertWithWhereUniqueWithoutWorkspaceInput);
