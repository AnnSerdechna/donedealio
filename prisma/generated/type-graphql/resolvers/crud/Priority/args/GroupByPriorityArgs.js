"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityOrderByWithAggregationInput_1 = require("../../../inputs/PriorityOrderByWithAggregationInput");
const PriorityScalarWhereWithAggregatesInput_1 = require("../../../inputs/PriorityScalarWhereWithAggregatesInput");
const PriorityWhereInput_1 = require("../../../inputs/PriorityWhereInput");
const PriorityScalarFieldEnum_1 = require("../../../../enums/PriorityScalarFieldEnum");
let GroupByPriorityArgs = class GroupByPriorityArgs {
};
exports.GroupByPriorityArgs = GroupByPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], GroupByPriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrderByWithAggregationInput_1.PriorityOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPriorityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityScalarFieldEnum_1.PriorityScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPriorityArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityScalarWhereWithAggregatesInput_1.PriorityScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityScalarWhereWithAggregatesInput_1.PriorityScalarWhereWithAggregatesInput)
], GroupByPriorityArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPriorityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPriorityArgs.prototype, "skip", void 0);
exports.GroupByPriorityArgs = GroupByPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPriorityArgs);
