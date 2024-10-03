"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCount_1 = require("../resolvers/outputs/WorkspaceCount");
let Workspace = class Workspace {
};
exports.Workspace = Workspace;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Workspace.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Workspace.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Workspace.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Workspace.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Workspace.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Workspace.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCount_1.WorkspaceCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCount_1.WorkspaceCount)
], Workspace.prototype, "_count", void 0);
exports.Workspace = Workspace = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Workspace", {})
], Workspace);
