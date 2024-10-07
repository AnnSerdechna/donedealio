"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StatusMinOrderByAggregateInput = class StatusMinOrderByAggregateInput {
};
exports.StatusMinOrderByAggregateInput = StatusMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMinOrderByAggregateInput.prototype, "color", void 0);
exports.StatusMinOrderByAggregateInput = StatusMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusMinOrderByAggregateInput", {})
], StatusMinOrderByAggregateInput);
