"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateOneWithoutFilesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutFilesInput_1 = require("../inputs/TaskCreateOrConnectWithoutFilesInput");
const TaskCreateWithoutFilesInput_1 = require("../inputs/TaskCreateWithoutFilesInput");
const TaskUpdateToOneWithWhereWithoutFilesInput_1 = require("../inputs/TaskUpdateToOneWithWhereWithoutFilesInput");
const TaskUpsertWithoutFilesInput_1 = require("../inputs/TaskUpsertWithoutFilesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateOneWithoutFilesNestedInput = class TaskUpdateOneWithoutFilesNestedInput {
};
exports.TaskUpdateOneWithoutFilesNestedInput = TaskUpdateOneWithoutFilesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutFilesInput_1.TaskCreateWithoutFilesInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutFilesInput_1.TaskCreateOrConnectWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutFilesInput_1.TaskCreateOrConnectWithoutFilesInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpsertWithoutFilesInput_1.TaskUpsertWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpsertWithoutFilesInput_1.TaskUpsertWithoutFilesInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutFilesInput_1.TaskUpdateToOneWithWhereWithoutFilesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateToOneWithWhereWithoutFilesInput_1.TaskUpdateToOneWithWhereWithoutFilesInput)
], TaskUpdateOneWithoutFilesNestedInput.prototype, "update", void 0);
exports.TaskUpdateOneWithoutFilesNestedInput = TaskUpdateOneWithoutFilesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateOneWithoutFilesNestedInput", {})
], TaskUpdateOneWithoutFilesNestedInput);
