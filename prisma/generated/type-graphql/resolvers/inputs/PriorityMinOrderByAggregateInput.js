"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriorityMinOrderByAggregateInput = class PriorityMinOrderByAggregateInput {
};
exports.PriorityMinOrderByAggregateInput = PriorityMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMinOrderByAggregateInput.prototype, "color", void 0);
exports.PriorityMinOrderByAggregateInput = PriorityMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityMinOrderByAggregateInput", {})
], PriorityMinOrderByAggregateInput);
