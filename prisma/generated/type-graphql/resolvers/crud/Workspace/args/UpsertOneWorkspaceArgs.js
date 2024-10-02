"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateInput_1 = require("../../../inputs/WorkspaceCreateInput");
const WorkspaceUpdateInput_1 = require("../../../inputs/WorkspaceUpdateInput");
const WorkspaceWhereUniqueInput_1 = require("../../../inputs/WorkspaceWhereUniqueInput");
let UpsertOneWorkspaceArgs = class UpsertOneWorkspaceArgs {
};
exports.UpsertOneWorkspaceArgs = UpsertOneWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], UpsertOneWorkspaceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateInput_1.WorkspaceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateInput_1.WorkspaceCreateInput)
], UpsertOneWorkspaceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateInput_1.WorkspaceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateInput_1.WorkspaceUpdateInput)
], UpsertOneWorkspaceArgs.prototype, "update", void 0);
exports.UpsertOneWorkspaceArgs = UpsertOneWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneWorkspaceArgs);
