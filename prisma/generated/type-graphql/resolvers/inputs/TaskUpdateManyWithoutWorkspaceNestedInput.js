"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateManyWithoutWorkspaceNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyWorkspaceInputEnvelope_1 = require("../inputs/TaskCreateManyWorkspaceInputEnvelope");
const TaskCreateOrConnectWithoutWorkspaceInput_1 = require("../inputs/TaskCreateOrConnectWithoutWorkspaceInput");
const TaskCreateWithoutWorkspaceInput_1 = require("../inputs/TaskCreateWithoutWorkspaceInput");
const TaskScalarWhereInput_1 = require("../inputs/TaskScalarWhereInput");
const TaskUpdateManyWithWhereWithoutWorkspaceInput_1 = require("../inputs/TaskUpdateManyWithWhereWithoutWorkspaceInput");
const TaskUpdateWithWhereUniqueWithoutWorkspaceInput_1 = require("../inputs/TaskUpdateWithWhereUniqueWithoutWorkspaceInput");
const TaskUpsertWithWhereUniqueWithoutWorkspaceInput_1 = require("../inputs/TaskUpsertWithWhereUniqueWithoutWorkspaceInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateManyWithoutWorkspaceNestedInput = class TaskUpdateManyWithoutWorkspaceNestedInput {
};
exports.TaskUpdateManyWithoutWorkspaceNestedInput = TaskUpdateManyWithoutWorkspaceNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutWorkspaceInput_1.TaskCreateWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutWorkspaceInput_1.TaskCreateOrConnectWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutWorkspaceInput_1.TaskUpsertWithWhereUniqueWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyWorkspaceInputEnvelope_1.TaskCreateManyWorkspaceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyWorkspaceInputEnvelope_1.TaskCreateManyWorkspaceInputEnvelope)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutWorkspaceInput_1.TaskUpdateWithWhereUniqueWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutWorkspaceInput_1.TaskUpdateManyWithWhereWithoutWorkspaceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarWhereInput_1.TaskScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskUpdateManyWithoutWorkspaceNestedInput.prototype, "deleteMany", void 0);
exports.TaskUpdateManyWithoutWorkspaceNestedInput = TaskUpdateManyWithoutWorkspaceNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateManyWithoutWorkspaceNestedInput", {})
], TaskUpdateManyWithoutWorkspaceNestedInput);
