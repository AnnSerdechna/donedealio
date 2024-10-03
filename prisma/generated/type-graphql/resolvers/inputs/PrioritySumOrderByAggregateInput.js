"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrioritySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PrioritySumOrderByAggregateInput = class PrioritySumOrderByAggregateInput {
};
exports.PrioritySumOrderByAggregateInput = PrioritySumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PrioritySumOrderByAggregateInput.prototype, "id", void 0);
exports.PrioritySumOrderByAggregateInput = PrioritySumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PrioritySumOrderByAggregateInput", {})
], PrioritySumOrderByAggregateInput);
