"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStatusTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumStatusTypeFilter_1 = require("../inputs/NestedEnumStatusTypeFilter");
const NestedEnumStatusTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumStatusTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const StatusType_1 = require("../../enums/StatusType");
let EnumStatusTypeWithAggregatesFilter = class EnumStatusTypeWithAggregatesFilter {
};
exports.EnumStatusTypeWithAggregatesFilter = EnumStatusTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumStatusTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStatusTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumStatusTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeWithAggregatesFilter_1.NestedEnumStatusTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeWithAggregatesFilter_1.NestedEnumStatusTypeWithAggregatesFilter)
], EnumStatusTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumStatusTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter)
], EnumStatusTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter)
], EnumStatusTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumStatusTypeWithAggregatesFilter = EnumStatusTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumStatusTypeWithAggregatesFilter", {})
], EnumStatusTypeWithAggregatesFilter);
