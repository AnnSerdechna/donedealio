"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFileOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileOrderByWithRelationInput_1 = require("../../../inputs/FileOrderByWithRelationInput");
const FileWhereInput_1 = require("../../../inputs/FileWhereInput");
const FileWhereUniqueInput_1 = require("../../../inputs/FileWhereUniqueInput");
const FileScalarFieldEnum_1 = require("../../../../enums/FileScalarFieldEnum");
let FindFirstFileOrThrowArgs = class FindFirstFileOrThrowArgs {
};
exports.FindFirstFileOrThrowArgs = FindFirstFileOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], FindFirstFileOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileOrderByWithRelationInput_1.FileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFileOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], FindFirstFileOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFileOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFileOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarFieldEnum_1.FileScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFileOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstFileOrThrowArgs = FindFirstFileOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstFileOrThrowArgs);
