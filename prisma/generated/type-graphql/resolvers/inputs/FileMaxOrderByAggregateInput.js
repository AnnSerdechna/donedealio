"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FileMaxOrderByAggregateInput = class FileMaxOrderByAggregateInput {
};
exports.FileMaxOrderByAggregateInput = FileMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxOrderByAggregateInput.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxOrderByAggregateInput.prototype, "taskId", void 0);
exports.FileMaxOrderByAggregateInput = FileMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileMaxOrderByAggregateInput", {})
], FileMaxOrderByAggregateInput);
