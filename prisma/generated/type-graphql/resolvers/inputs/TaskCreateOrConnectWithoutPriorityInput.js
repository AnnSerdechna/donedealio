"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutPriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutPriorityInput_1 = require("../inputs/TaskCreateWithoutPriorityInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutPriorityInput = class TaskCreateOrConnectWithoutPriorityInput {
};
exports.TaskCreateOrConnectWithoutPriorityInput = TaskCreateOrConnectWithoutPriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutPriorityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutPriorityInput_1.TaskCreateWithoutPriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutPriorityInput_1.TaskCreateWithoutPriorityInput)
], TaskCreateOrConnectWithoutPriorityInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutPriorityInput = TaskCreateOrConnectWithoutPriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutPriorityInput", {})
], TaskCreateOrConnectWithoutPriorityInput);
