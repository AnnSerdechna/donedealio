"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FileCountOrderByAggregateInput = class FileCountOrderByAggregateInput {
};
exports.FileCountOrderByAggregateInput = FileCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileCountOrderByAggregateInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileCountOrderByAggregateInput.prototype, "taskId", void 0);
exports.FileCountOrderByAggregateInput = FileCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCountOrderByAggregateInput", {})
], FileCountOrderByAggregateInput);
