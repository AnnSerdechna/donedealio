"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceWhereInput_1 = require("../inputs/WorkspaceWhereInput");
let WorkspaceListRelationFilter = class WorkspaceListRelationFilter {
};
exports.WorkspaceListRelationFilter = WorkspaceListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceListRelationFilter.prototype, "none", void 0);
exports.WorkspaceListRelationFilter = WorkspaceListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceListRelationFilter", {})
], WorkspaceListRelationFilter);
