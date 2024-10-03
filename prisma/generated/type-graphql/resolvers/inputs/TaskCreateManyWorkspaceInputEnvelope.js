"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateManyWorkspaceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateManyWorkspaceInput_1 = require("../inputs/TaskCreateManyWorkspaceInput");
let TaskCreateManyWorkspaceInputEnvelope = class TaskCreateManyWorkspaceInputEnvelope {
};
exports.TaskCreateManyWorkspaceInputEnvelope = TaskCreateManyWorkspaceInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskCreateManyWorkspaceInput_1.TaskCreateManyWorkspaceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskCreateManyWorkspaceInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TaskCreateManyWorkspaceInputEnvelope.prototype, "skipDuplicates", void 0);
exports.TaskCreateManyWorkspaceInputEnvelope = TaskCreateManyWorkspaceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateManyWorkspaceInputEnvelope", {})
], TaskCreateManyWorkspaceInputEnvelope);
