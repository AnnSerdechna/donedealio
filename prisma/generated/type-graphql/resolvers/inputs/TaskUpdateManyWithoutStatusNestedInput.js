"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyWithoutStatusNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyStatusInputEnvelope_1 = require("../inputs/TaskCreateManyStatusInputEnvelope");
const TaskCreateOrConnectWithoutStatusInput_1 = require("../inputs/TaskCreateOrConnectWithoutStatusInput");
const TaskCreateWithoutStatusInput_1 = require("../inputs/TaskCreateWithoutStatusInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutStatusInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutStatusInput");
const TaskUpdateWithWhereUniqueWithoutStatusInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutStatusInput");
const TaskUpsertWithWhereUniqueWithoutStatusInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutStatusInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutStatusNestedInput = class TaskUpdateManyWithoutStatusNestedInput {
};
exports.TaskUpdateManyWithoutStatusNestedInput = TaskUpdateManyWithoutStatusNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutStatusInput_1.TaskCreateWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutStatusInput_1.TaskCreateOrConnectWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutStatusInput_1.TaskUpsertWithWhereUniqueWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyStatusInputEnvelope_1.TaskCreateManyStatusInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyStatusInputEnvelope_1.TaskCreateManyStatusInputEnvelope)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutStatusInput_1.TaskUpdateWithWhereUniqueWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutStatusInput_1.TaskUpdateManyWithWhereWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutStatusNestedInput.prototype, "deleteMany", void 0);
exports.TaskUpdateManyWithoutStatusNestedInput = TaskUpdateManyWithoutStatusNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyWithoutStatusNestedInput", {})
], TaskUpdateManyWithoutStatusNestedInput);
