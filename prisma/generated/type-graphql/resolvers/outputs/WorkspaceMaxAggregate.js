"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WorkspaceMaxAggregate = class WorkspaceMaxAggregate {
};
exports.WorkspaceMaxAggregate = WorkspaceMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceMaxAggregate.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceMaxAggregate.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceMaxAggregate.prototype, "userId", void 0);
exports.WorkspaceMaxAggregate = WorkspaceMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkspaceMaxAggregate", {})
], WorkspaceMaxAggregate);
