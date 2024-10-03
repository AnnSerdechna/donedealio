"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriorityMaxOrderByAggregateInput = class PriorityMaxOrderByAggregateInput {
};
exports.PriorityMaxOrderByAggregateInput = PriorityMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMaxOrderByAggregateInput.prototype, "color", void 0);
exports.PriorityMaxOrderByAggregateInput = PriorityMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityMaxOrderByAggregateInput", {})
], PriorityMaxOrderByAggregateInput);
