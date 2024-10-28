"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumStatusTypeWithAggregatesFilter_1 = require("../inputs/EnumStatusTypeWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let StatusScalarWhereWithAggregatesInput = class StatusScalarWhereWithAggregatesInput {
};
exports.StatusScalarWhereWithAggregatesInput = StatusScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StatusScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], StatusScalarWhereWithAggregatesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StatusScalarWhereWithAggregatesInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumStatusTypeWithAggregatesFilter_1.EnumStatusTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumStatusTypeWithAggregatesFilter_1.EnumStatusTypeWithAggregatesFilter)
], StatusScalarWhereWithAggregatesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], StatusScalarWhereWithAggregatesInput.prototype, "userId", void 0);
exports.StatusScalarWhereWithAggregatesInput = StatusScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusScalarWhereWithAggregatesInput", {})
], StatusScalarWhereWithAggregatesInput);
