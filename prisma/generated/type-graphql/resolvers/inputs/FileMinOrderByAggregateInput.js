"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let FileMinOrderByAggregateInput = class FileMinOrderByAggregateInput {
};
exports.FileMinOrderByAggregateInput = FileMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinOrderByAggregateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinOrderByAggregateInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinOrderByAggregateInput.prototype, "taskId", void 0);
exports.FileMinOrderByAggregateInput = FileMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileMinOrderByAggregateInput", {})
], FileMinOrderByAggregateInput);
