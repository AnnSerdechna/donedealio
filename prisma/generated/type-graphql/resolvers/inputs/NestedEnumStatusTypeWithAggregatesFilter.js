"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumStatusTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumStatusTypeFilter_1 = require("../inputs/NestedEnumStatusTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const StatusType_1 = require("../../enums/StatusType");
let NestedEnumStatusTypeWithAggregatesFilter = class NestedEnumStatusTypeWithAggregatesFilter {
};
exports.NestedEnumStatusTypeWithAggregatesFilter = NestedEnumStatusTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeWithAggregatesFilter)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeFilter_1.NestedEnumStatusTypeFilter)
], NestedEnumStatusTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumStatusTypeWithAggregatesFilter = NestedEnumStatusTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumStatusTypeWithAggregatesFilter", {})
], NestedEnumStatusTypeWithAggregatesFilter);
