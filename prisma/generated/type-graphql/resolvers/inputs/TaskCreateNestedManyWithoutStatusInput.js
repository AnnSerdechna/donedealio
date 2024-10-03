"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedManyWithoutStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyStatusInputEnvelope_1 = require("../inputs/TaskCreateManyStatusInputEnvelope");
const TaskCreateOrConnectWithoutStatusInput_1 = require("../inputs/TaskCreateOrConnectWithoutStatusInput");
const TaskCreateWithoutStatusInput_1 = require("../inputs/TaskCreateWithoutStatusInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedManyWithoutStatusInput = class TaskCreateNestedManyWithoutStatusInput {
};
exports.TaskCreateNestedManyWithoutStatusInput = TaskCreateNestedManyWithoutStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateWithoutStatusInput_1.TaskCreateWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutStatusInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutStatusInput_1.TaskCreateOrConnectWithoutStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutStatusInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateManyStatusInputEnvelope_1.TaskCreateManyStatusInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateManyStatusInputEnvelope_1.TaskCreateManyStatusInputEnvelope)
], TaskCreateNestedManyWithoutStatusInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskWhereUniqueInput_1.TaskWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateNestedManyWithoutStatusInput.prototype, "connect", void 0);
exports.TaskCreateNestedManyWithoutStatusInput = TaskCreateNestedManyWithoutStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedManyWithoutStatusInput", {})
], TaskCreateNestedManyWithoutStatusInput);
