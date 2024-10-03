"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceWhereInput_1 = require("../inputs/WorkspaceWhereInput");
let WorkspaceRelationFilter = class WorkspaceRelationFilter {
};
exports.WorkspaceRelationFilter = WorkspaceRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceRelationFilter.prototype, "isNot", void 0);
exports.WorkspaceRelationFilter = WorkspaceRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceRelationFilter", {})
], WorkspaceRelationFilter);
