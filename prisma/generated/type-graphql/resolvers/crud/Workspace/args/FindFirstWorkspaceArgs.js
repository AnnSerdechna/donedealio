"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceOrderByWithRelationInput_1 = require("../../../inputs/WorkspaceOrderByWithRelationInput");
const WorkspaceWhereInput_1 = require("../../../inputs/WorkspaceWhereInput");
const WorkspaceWhereUniqueInput_1 = require("../../../inputs/WorkspaceWhereUniqueInput");
const WorkspaceScalarFieldEnum_1 = require("../../../../enums/WorkspaceScalarFieldEnum");
let FindFirstWorkspaceArgs = class FindFirstWorkspaceArgs {
};
exports.FindFirstWorkspaceArgs = FindFirstWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], FindFirstWorkspaceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceOrderByWithRelationInput_1.WorkspaceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWorkspaceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], FindFirstWorkspaceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWorkspaceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstWorkspaceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarFieldEnum_1.WorkspaceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstWorkspaceArgs.prototype, "distinct", void 0);
exports.FindFirstWorkspaceArgs = FindFirstWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstWorkspaceArgs);
