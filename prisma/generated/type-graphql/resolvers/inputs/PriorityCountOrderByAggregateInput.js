"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriorityCountOrderByAggregateInput = class PriorityCountOrderByAggregateInput {
};
exports.PriorityCountOrderByAggregateInput = PriorityCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCountOrderByAggregateInput.prototype, "color", void 0);
exports.PriorityCountOrderByAggregateInput = PriorityCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityCountOrderByAggregateInput", {})
], PriorityCountOrderByAggregateInput);
