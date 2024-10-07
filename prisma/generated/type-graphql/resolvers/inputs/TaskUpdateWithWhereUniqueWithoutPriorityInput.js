"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithWhereUniqueWithoutPriorityInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutPriorityInput_1 = require("../inputs/TaskUpdateWithoutPriorityInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateWithWhereUniqueWithoutPriorityInput = class TaskUpdateWithWhereUniqueWithoutPriorityInput {
};
exports.TaskUpdateWithWhereUniqueWithoutPriorityInput = TaskUpdateWithWhereUniqueWithoutPriorityInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateWithWhereUniqueWithoutPriorityInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutPriorityInput_1.TaskUpdateWithoutPriorityInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutPriorityInput_1.TaskUpdateWithoutPriorityInput)
], TaskUpdateWithWhereUniqueWithoutPriorityInput.prototype, "data", void 0);
exports.TaskUpdateWithWhereUniqueWithoutPriorityInput = TaskUpdateWithWhereUniqueWithoutPriorityInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutPriorityInput", {})
], TaskUpdateWithWhereUniqueWithoutPriorityInput);
