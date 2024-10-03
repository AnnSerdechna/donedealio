"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutStatusInput_1 = require("../inputs/TaskCreateWithoutStatusInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutStatusInput = class TaskCreateOrConnectWithoutStatusInput {
};
exports.TaskCreateOrConnectWithoutStatusInput = TaskCreateOrConnectWithoutStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutStatusInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutStatusInput_1.TaskCreateWithoutStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutStatusInput_1.TaskCreateWithoutStatusInput)
], TaskCreateOrConnectWithoutStatusInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutStatusInput = TaskCreateOrConnectWithoutStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutStatusInput", {})
], TaskCreateOrConnectWithoutStatusInput);
