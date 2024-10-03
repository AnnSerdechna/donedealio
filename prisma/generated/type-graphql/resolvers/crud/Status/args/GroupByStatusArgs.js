"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusOrderByWithAggregationInput_1 = require("../../../inputs/StatusOrderByWithAggregationInput");
const StatusScalarWhereWithAggregatesInput_1 = require("../../../inputs/StatusScalarWhereWithAggregatesInput");
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
const StatusScalarFieldEnum_1 = require("../../../../enums/StatusScalarFieldEnum");
let GroupByStatusArgs = class GroupByStatusArgs {
};
exports.GroupByStatusArgs = GroupByStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], GroupByStatusArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusOrderByWithAggregationInput_1.StatusOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStatusArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusScalarFieldEnum_1.StatusScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStatusArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusScalarWhereWithAggregatesInput_1.StatusScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusScalarWhereWithAggregatesInput_1.StatusScalarWhereWithAggregatesInput)
], GroupByStatusArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStatusArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStatusArgs.prototype, "skip", void 0);
exports.GroupByStatusArgs = GroupByStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStatusArgs);
