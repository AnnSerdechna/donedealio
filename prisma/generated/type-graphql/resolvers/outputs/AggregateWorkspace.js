"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkspace = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCountAggregate_1 = require("../outputs/WorkspaceCountAggregate");
const WorkspaceMaxAggregate_1 = require("../outputs/WorkspaceMaxAggregate");
const WorkspaceMinAggregate_1 = require("../outputs/WorkspaceMinAggregate");
let AggregateWorkspace = class AggregateWorkspace {
};
exports.AggregateWorkspace = AggregateWorkspace;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCountAggregate_1.WorkspaceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCountAggregate_1.WorkspaceCountAggregate)
], AggregateWorkspace.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceMinAggregate_1.WorkspaceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceMinAggregate_1.WorkspaceMinAggregate)
], AggregateWorkspace.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceMaxAggregate_1.WorkspaceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceMaxAggregate_1.WorkspaceMaxAggregate)
], AggregateWorkspace.prototype, "_max", void 0);
exports.AggregateWorkspace = AggregateWorkspace = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateWorkspace", {})
], AggregateWorkspace);
