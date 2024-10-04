"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StatusCountOrderByAggregateInput = class StatusCountOrderByAggregateInput {
};
exports.StatusCountOrderByAggregateInput = StatusCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusCountOrderByAggregateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusCountOrderByAggregateInput.prototype, "type", void 0);
exports.StatusCountOrderByAggregateInput = StatusCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCountOrderByAggregateInput", {})
], StatusCountOrderByAggregateInput);
