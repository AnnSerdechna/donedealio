"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithWhereUniqueWithoutStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutStatusInput_1 = require("../inputs/TaskCreateWithoutStatusInput");
const TaskUpdateWithoutStatusInput_1 = require("../inputs/TaskUpdateWithoutStatusInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpsertWithWhereUniqueWithoutStatusInput = class TaskUpsertWithWhereUniqueWithoutStatusInput {
};
exports.TaskUpsertWithWhereUniqueWithoutStatusInput = TaskUpsertWithWhereUniqueWithoutStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpsertWithWhereUniqueWithoutStatusInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutStatusInput_1.TaskUpdateWithoutStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutStatusInput_1.TaskUpdateWithoutStatusInput)
], TaskUpsertWithWhereUniqueWithoutStatusInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutStatusInput_1.TaskCreateWithoutStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutStatusInput_1.TaskCreateWithoutStatusInput)
], TaskUpsertWithWhereUniqueWithoutStatusInput.prototype, "create", void 0);
exports.TaskUpsertWithWhereUniqueWithoutStatusInput = TaskUpsertWithWhereUniqueWithoutStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithWhereUniqueWithoutStatusInput", {})
], TaskUpsertWithWhereUniqueWithoutStatusInput);
