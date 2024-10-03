"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateWithWhereUniqueWithoutStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutStatusInput_1 = require("../inputs/TaskUpdateWithoutStatusInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateWithWhereUniqueWithoutStatusInput = class TaskUpdateWithWhereUniqueWithoutStatusInput {
};
exports.TaskUpdateWithWhereUniqueWithoutStatusInput = TaskUpdateWithWhereUniqueWithoutStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateWithWhereUniqueWithoutStatusInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutStatusInput_1.TaskUpdateWithoutStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutStatusInput_1.TaskUpdateWithoutStatusInput)
], TaskUpdateWithWhereUniqueWithoutStatusInput.prototype, "data", void 0);
exports.TaskUpdateWithWhereUniqueWithoutStatusInput = TaskUpdateWithWhereUniqueWithoutStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateWithWhereUniqueWithoutStatusInput", {})
], TaskUpdateWithWhereUniqueWithoutStatusInput);
