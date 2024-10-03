"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFileOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileWhereUniqueInput_1 = require("../../../inputs/FileWhereUniqueInput");
let FindUniqueFileOrThrowArgs = class FindUniqueFileOrThrowArgs {
};
exports.FindUniqueFileOrThrowArgs = FindUniqueFileOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], FindUniqueFileOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueFileOrThrowArgs = FindUniqueFileOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFileOrThrowArgs);
