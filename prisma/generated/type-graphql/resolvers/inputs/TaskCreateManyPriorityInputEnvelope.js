"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyPriorityInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyPriorityInput_1 = require("../inputs/TaskCreateManyPriorityInput");
let TaskCreateManyPriorityInputEnvelope = class TaskCreateManyPriorityInputEnvelope {
};
exports.TaskCreateManyPriorityInputEnvelope = TaskCreateManyPriorityInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyPriorityInput_1.TaskCreateManyPriorityInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateManyPriorityInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateManyPriorityInputEnvelope.prototype, "skipDuplicates", void 0);
exports.TaskCreateManyPriorityInputEnvelope = TaskCreateManyPriorityInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyPriorityInputEnvelope", {})
], TaskCreateManyPriorityInputEnvelope);
