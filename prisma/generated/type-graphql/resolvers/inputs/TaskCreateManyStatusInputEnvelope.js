"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyStatusInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyStatusInput_1 = require("../inputs/TaskCreateManyStatusInput");
let TaskCreateManyStatusInputEnvelope = class TaskCreateManyStatusInputEnvelope {
};
exports.TaskCreateManyStatusInputEnvelope = TaskCreateManyStatusInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyStatusInput_1.TaskCreateManyStatusInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateManyStatusInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateManyStatusInputEnvelope.prototype, "skipDuplicates", void 0);
exports.TaskCreateManyStatusInputEnvelope = TaskCreateManyStatusInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyStatusInputEnvelope", {})
], TaskCreateManyStatusInputEnvelope);
