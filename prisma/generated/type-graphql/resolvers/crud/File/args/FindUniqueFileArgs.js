"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileWhereUniqueInput_1 = require("../../../inputs/FileWhereUniqueInput");
let FindUniqueFileArgs = class FindUniqueFileArgs {
};
exports.FindUniqueFileArgs = FindUniqueFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], FindUniqueFileArgs.prototype, "where", void 0);
exports.FindUniqueFileArgs = FindUniqueFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFileArgs);