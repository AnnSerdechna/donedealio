"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileAvgAggregate_1 = require("../outputs/FileAvgAggregate");
const FileCountAggregate_1 = require("../outputs/FileCountAggregate");
const FileMaxAggregate_1 = require("../outputs/FileMaxAggregate");
const FileMinAggregate_1 = require("../outputs/FileMinAggregate");
const FileSumAggregate_1 = require("../outputs/FileSumAggregate");
let FileGroupBy = class FileGroupBy {
};
exports.FileGroupBy = FileGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FileGroupBy.prototype, "file", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileGroupBy.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCountAggregate_1.FileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCountAggregate_1.FileCountAggregate)
], FileGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileAvgAggregate_1.FileAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileAvgAggregate_1.FileAvgAggregate)
], FileGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileSumAggregate_1.FileSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileSumAggregate_1.FileSumAggregate)
], FileGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileMinAggregate_1.FileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileMinAggregate_1.FileMinAggregate)
], FileGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileMaxAggregate_1.FileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileMaxAggregate_1.FileMaxAggregate)
], FileGroupBy.prototype, "_max", void 0);
exports.FileGroupBy = FileGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FileGroupBy", {})
], FileGroupBy);
