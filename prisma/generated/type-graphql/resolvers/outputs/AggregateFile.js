"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileAvgAggregate_1 = require("../outputs/FileAvgAggregate");
const FileCountAggregate_1 = require("../outputs/FileCountAggregate");
const FileMaxAggregate_1 = require("../outputs/FileMaxAggregate");
const FileMinAggregate_1 = require("../outputs/FileMinAggregate");
const FileSumAggregate_1 = require("../outputs/FileSumAggregate");
let AggregateFile = class AggregateFile {
};
exports.AggregateFile = AggregateFile;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCountAggregate_1.FileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCountAggregate_1.FileCountAggregate)
], AggregateFile.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileAvgAggregate_1.FileAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileAvgAggregate_1.FileAvgAggregate)
], AggregateFile.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileSumAggregate_1.FileSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileSumAggregate_1.FileSumAggregate)
], AggregateFile.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileMinAggregate_1.FileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileMinAggregate_1.FileMinAggregate)
], AggregateFile.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileMaxAggregate_1.FileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileMaxAggregate_1.FileMaxAggregate)
], AggregateFile.prototype, "_max", void 0);
exports.AggregateFile = AggregateFile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateFile", {})
], AggregateFile);
