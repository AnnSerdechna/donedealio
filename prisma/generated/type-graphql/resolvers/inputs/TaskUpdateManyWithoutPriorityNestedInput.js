"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyWithoutPriorityNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyPriorityInputEnvelope_1 = require("../inputs/TaskCreateManyPriorityInputEnvelope");
const TaskCreateOrConnectWithoutPriorityInput_1 = require("../inputs/TaskCreateOrConnectWithoutPriorityInput");
const TaskCreateWithoutPriorityInput_1 = require("../inputs/TaskCreateWithoutPriorityInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutPriorityInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutPriorityInput");
const TaskUpdateWithWhereUniqueWithoutPriorityInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutPriorityInput");
const TaskUpsertWithWhereUniqueWithoutPriorityInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutPriorityInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutPriorityNestedInput = class TaskUpdateManyWithoutPriorityNestedInput {
};
exports.TaskUpdateManyWithoutPriorityNestedInput = TaskUpdateManyWithoutPriorityNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutPriorityInput_1.TaskCreateWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutPriorityInput_1.TaskCreateOrConnectWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutPriorityInput_1.TaskUpsertWithWhereUniqueWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyPriorityInputEnvelope_1.TaskCreateManyPriorityInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyPriorityInputEnvelope_1.TaskCreateManyPriorityInputEnvelope)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutPriorityInput_1.TaskUpdateWithWhereUniqueWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutPriorityInput_1.TaskUpdateManyWithWhereWithoutPriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutPriorityNestedInput.prototype, "deleteMany", void 0);
exports.TaskUpdateManyWithoutPriorityNestedInput = TaskUpdateManyWithoutPriorityNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyWithoutPriorityNestedInput", {})
], TaskUpdateManyWithoutPriorityNestedInput);
