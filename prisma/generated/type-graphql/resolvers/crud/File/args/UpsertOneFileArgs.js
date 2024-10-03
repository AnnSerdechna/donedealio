"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateInput_1 = require("../../../inputs/FileCreateInput");
const FileUpdateInput_1 = require("../../../inputs/FileUpdateInput");
const FileWhereUniqueInput_1 = require("../../../inputs/FileWhereUniqueInput");
let UpsertOneFileArgs = class UpsertOneFileArgs {
};
exports.UpsertOneFileArgs = UpsertOneFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], UpsertOneFileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateInput_1.FileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileCreateInput_1.FileCreateInput)
], UpsertOneFileArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateInput_1.FileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileUpdateInput_1.FileUpdateInput)
], UpsertOneFileArgs.prototype, "update", void 0);
exports.UpsertOneFileArgs = UpsertOneFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneFileArgs);
