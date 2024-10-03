"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FileAvgOrderByAggregateInput = class FileAvgOrderByAggregateInput {
};
exports.FileAvgOrderByAggregateInput = FileAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileAvgOrderByAggregateInput.prototype, "id", void 0);
exports.FileAvgOrderByAggregateInput = FileAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileAvgOrderByAggregateInput", {})
], FileAvgOrderByAggregateInput);
