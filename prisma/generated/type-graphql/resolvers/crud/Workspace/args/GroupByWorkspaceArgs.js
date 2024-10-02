"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceOrderByWithAggregationInput_1 = require("../../../inputs/WorkspaceOrderByWithAggregationInput");
const WorkspaceScalarWhereWithAggregatesInput_1 = require("../../../inputs/WorkspaceScalarWhereWithAggregatesInput");
const WorkspaceWhereInput_1 = require("../../../inputs/WorkspaceWhereInput");
const WorkspaceScalarFieldEnum_1 = require("../../../../enums/WorkspaceScalarFieldEnum");
let GroupByWorkspaceArgs = class GroupByWorkspaceArgs {
};
exports.GroupByWorkspaceArgs = GroupByWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], GroupByWorkspaceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceOrderByWithAggregationInput_1.WorkspaceOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWorkspaceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarFieldEnum_1.WorkspaceScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByWorkspaceArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceScalarWhereWithAggregatesInput_1.WorkspaceScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceScalarWhereWithAggregatesInput_1.WorkspaceScalarWhereWithAggregatesInput)
], GroupByWorkspaceArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWorkspaceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByWorkspaceArgs.prototype, "skip", void 0);
exports.GroupByWorkspaceArgs = GroupByWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByWorkspaceArgs);
