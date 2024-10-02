"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceOrderByWithRelationInput_1 = require("../../../inputs/WorkspaceOrderByWithRelationInput");
const WorkspaceWhereInput_1 = require("../../../inputs/WorkspaceWhereInput");
const WorkspaceWhereUniqueInput_1 = require("../../../inputs/WorkspaceWhereUniqueInput");
const WorkspaceScalarFieldEnum_1 = require("../../../../enums/WorkspaceScalarFieldEnum");
let UserWorkspacesArgs = class UserWorkspacesArgs {
};
exports.UserWorkspacesArgs = UserWorkspacesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], UserWorkspacesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceOrderByWithRelationInput_1.WorkspaceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWorkspacesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], UserWorkspacesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserWorkspacesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserWorkspacesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarFieldEnum_1.WorkspaceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWorkspacesArgs.prototype, "distinct", void 0);
exports.UserWorkspacesArgs = UserWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserWorkspacesArgs);
