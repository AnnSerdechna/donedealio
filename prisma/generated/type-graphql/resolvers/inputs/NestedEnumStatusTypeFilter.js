"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumStatusTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusType_1 = require("../../enums/StatusType");
let NestedEnumStatusTypeFilter = class NestedEnumStatusTypeFilter {
};
exports.NestedEnumStatusTypeFilter = NestedEnumStatusTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumStatusTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStatusTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusType_1.StatusType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumStatusTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumStatusTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumStatusTypeFilter)
], NestedEnumStatusTypeFilter.prototype, "not", void 0);
exports.NestedEnumStatusTypeFilter = NestedEnumStatusTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumStatusTypeFilter", {})
], NestedEnumStatusTypeFilter);
