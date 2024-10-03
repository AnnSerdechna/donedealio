"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileWhereInput_1 = require("../inputs/FileWhereInput");
let FileListRelationFilter = class FileListRelationFilter {
};
exports.FileListRelationFilter = FileListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], FileListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], FileListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], FileListRelationFilter.prototype, "none", void 0);
exports.FileListRelationFilter = FileListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FileListRelationFilter", {})
], FileListRelationFilter);
