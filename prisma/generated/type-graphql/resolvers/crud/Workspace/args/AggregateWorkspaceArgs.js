"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceOrderByWithRelationInput_1 = require("../../../inputs/WorkspaceOrderByWithRelationInput");
const WorkspaceWhereInput_1 = require("../../../inputs/WorkspaceWhereInput");
const WorkspaceWhereUniqueInput_1 = require("../../../inputs/WorkspaceWhereUniqueInput");
let AggregateWorkspaceArgs = class AggregateWorkspaceArgs {
};
exports.AggregateWorkspaceArgs = AggregateWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], AggregateWorkspaceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceOrderByWithRelationInput_1.WorkspaceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateWorkspaceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], AggregateWorkspaceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWorkspaceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateWorkspaceArgs.prototype, "skip", void 0);
exports.AggregateWorkspaceArgs = AggregateWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateWorkspaceArgs);
