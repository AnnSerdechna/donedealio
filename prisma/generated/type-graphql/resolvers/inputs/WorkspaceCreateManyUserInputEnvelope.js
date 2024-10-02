"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateManyUserInput_1 = require("../inputs/WorkspaceCreateManyUserInput");
let WorkspaceCreateManyUserInputEnvelope = class WorkspaceCreateManyUserInputEnvelope {
};
exports.WorkspaceCreateManyUserInputEnvelope = WorkspaceCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateManyUserInput_1.WorkspaceCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], WorkspaceCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.WorkspaceCreateManyUserInputEnvelope = WorkspaceCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateManyUserInputEnvelope", {})
], WorkspaceCreateManyUserInputEnvelope);
