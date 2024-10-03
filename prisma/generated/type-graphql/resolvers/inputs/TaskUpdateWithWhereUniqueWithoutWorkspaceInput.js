"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithWhereUniqueWithoutWorkspaceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutWorkspaceInput_1 = require("../inputs/TaskUpdateWithoutWorkspaceInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateWithWhereUniqueWithoutWorkspaceInput = class TaskUpdateWithWhereUniqueWithoutWorkspaceInput {
};
exports.TaskUpdateWithWhereUniqueWithoutWorkspaceInput = TaskUpdateWithWhereUniqueWithoutWorkspaceInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateWithWhereUniqueWithoutWorkspaceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutWorkspaceInput_1.TaskUpdateWithoutWorkspaceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutWorkspaceInput_1.TaskUpdateWithoutWorkspaceInput)
], TaskUpdateWithWhereUniqueWithoutWorkspaceInput.prototype, "data", void 0);
exports.TaskUpdateWithWhereUniqueWithoutWorkspaceInput = TaskUpdateWithWhereUniqueWithoutWorkspaceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutWorkspaceInput", {})
], TaskUpdateWithWhereUniqueWithoutWorkspaceInput);
