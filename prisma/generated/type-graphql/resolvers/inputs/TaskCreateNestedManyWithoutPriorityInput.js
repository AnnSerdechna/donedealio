"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedManyWithoutPriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyPriorityInputEnvelope_1 = require("../inputs/TaskCreateManyPriorityInputEnvelope");
const TaskCreateOrConnectWithoutPriorityInput_1 = require("../inputs/TaskCreateOrConnectWithoutPriorityInput");
const TaskCreateWithoutPriorityInput_1 = require("../inputs/TaskCreateWithoutPriorityInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedManyWithoutPriorityInput = class TaskCreateNestedManyWithoutPriorityInput {
};
exports.TaskCreateNestedManyWithoutPriorityInput = TaskCreateNestedManyWithoutPriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutPriorityInput_1.TaskCreateWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutPriorityInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutPriorityInput_1.TaskCreateOrConnectWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutPriorityInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyPriorityInputEnvelope_1.TaskCreateManyPriorityInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyPriorityInputEnvelope_1.TaskCreateManyPriorityInputEnvelope)
], TaskCreateNestedManyWithoutPriorityInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutPriorityInput.prototype, "connect", void 0);
exports.TaskCreateNestedManyWithoutPriorityInput = TaskCreateNestedManyWithoutPriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedManyWithoutPriorityInput", {})
], TaskCreateNestedManyWithoutPriorityInput);
