"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCountAggregate_1 = require("../outputs/WorkspaceCountAggregate");
const WorkspaceMaxAggregate_1 = require("../outputs/WorkspaceMaxAggregate");
const WorkspaceMinAggregate_1 = require("../outputs/WorkspaceMinAggregate");
let WorkspaceGroupBy = class WorkspaceGroupBy {
};
exports.WorkspaceGroupBy = WorkspaceGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCountAggregate_1.WorkspaceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCountAggregate_1.WorkspaceCountAggregate)
], WorkspaceGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceMinAggregate_1.WorkspaceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceMinAggregate_1.WorkspaceMinAggregate)
], WorkspaceGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceMaxAggregate_1.WorkspaceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceMaxAggregate_1.WorkspaceMaxAggregate)
], WorkspaceGroupBy.prototype, "_max", void 0);
exports.WorkspaceGroupBy = WorkspaceGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkspaceGroupBy", {})
], WorkspaceGroupBy);
