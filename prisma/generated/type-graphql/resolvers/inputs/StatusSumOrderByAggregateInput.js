"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StatusSumOrderByAggregateInput = class StatusSumOrderByAggregateInput {
};
exports.StatusSumOrderByAggregateInput = StatusSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusSumOrderByAggregateInput.prototype, "id", void 0);
exports.StatusSumOrderByAggregateInput = StatusSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusSumOrderByAggregateInput", {})
], StatusSumOrderByAggregateInput);
