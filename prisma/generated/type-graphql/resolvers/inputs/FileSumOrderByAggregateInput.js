"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FileSumOrderByAggregateInput = class FileSumOrderByAggregateInput {
};
exports.FileSumOrderByAggregateInput = FileSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileSumOrderByAggregateInput.prototype, "id", void 0);
exports.FileSumOrderByAggregateInput = FileSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileSumOrderByAggregateInput", {})
], FileSumOrderByAggregateInput);
