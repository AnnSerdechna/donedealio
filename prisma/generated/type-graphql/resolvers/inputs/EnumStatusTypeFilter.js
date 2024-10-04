"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStatusTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumStatusTypeFilter_1 = require("../inputs/NestedEnumStatusTypeFilter");
const StatusType_1 = require("../../enums/StatusType");
let EnumStatusTypeFilter = class EnumStatusTypeFilter {
};
exports.EnumStatusTypeFilter = EnumStatusTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumStatusTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStatusTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStatusTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter)
], EnumStatusTypeFilter.prototype, "not", void 0);
exports.EnumStatusTypeFilter = EnumStatusTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumStatusTypeFilter", {})
], EnumStatusTypeFilter);
