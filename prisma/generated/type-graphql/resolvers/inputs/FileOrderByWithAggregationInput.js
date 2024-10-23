"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileAvgOrderByAggregateInput_1 = require("../inputs/FileAvgOrderByAggregateInput");
const FileCountOrderByAggregateInput_1 = require("../inputs/FileCountOrderByAggregateInput");
const FileMaxOrderByAggregateInput_1 = require("../inputs/FileMaxOrderByAggregateInput");
const FileMinOrderByAggregateInput_1 = require("../inputs/FileMinOrderByAggregateInput");
const FileSumOrderByAggregateInput_1 = require("../inputs/FileSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FileOrderByWithAggregationInput = class FileOrderByWithAggregationInput {
};
exports.FileOrderByWithAggregationInput = FileOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileOrderByWithAggregationInput.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FileOrderByWithAggregationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCountOrderByAggregateInput_1.FileCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCountOrderByAggregateInput_1.FileCountOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileAvgOrderByAggregateInput_1.FileAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileAvgOrderByAggregateInput_1.FileAvgOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileMaxOrderByAggregateInput_1.FileMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileMaxOrderByAggregateInput_1.FileMaxOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileMinOrderByAggregateInput_1.FileMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileMinOrderByAggregateInput_1.FileMinOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileSumOrderByAggregateInput_1.FileSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileSumOrderByAggregateInput_1.FileSumOrderByAggregateInput)
], FileOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.FileOrderByWithAggregationInput = FileOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileOrderByWithAggregationInput", {})
], FileOrderByWithAggregationInput);
