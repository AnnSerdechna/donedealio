"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithWhereUniqueWithoutPriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutPriorityInput_1 = require("../inputs/TaskCreateWithoutPriorityInput");
const TaskUpdateWithoutPriorityInput_1 = require("../inputs/TaskUpdateWithoutPriorityInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpsertWithWhereUniqueWithoutPriorityInput = class TaskUpsertWithWhereUniqueWithoutPriorityInput {
};
exports.TaskUpsertWithWhereUniqueWithoutPriorityInput = TaskUpsertWithWhereUniqueWithoutPriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpsertWithWhereUniqueWithoutPriorityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutPriorityInput_1.TaskUpdateWithoutPriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutPriorityInput_1.TaskUpdateWithoutPriorityInput)
], TaskUpsertWithWhereUniqueWithoutPriorityInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutPriorityInput_1.TaskCreateWithoutPriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutPriorityInput_1.TaskCreateWithoutPriorityInput)
], TaskUpsertWithWhereUniqueWithoutPriorityInput.prototype, "create", void 0);
exports.TaskUpsertWithWhereUniqueWithoutPriorityInput = TaskUpsertWithWhereUniqueWithoutPriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutPriorityInput", {})
], TaskUpsertWithWhereUniqueWithoutPriorityInput);
