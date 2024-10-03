"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileWhereInput_1 = require("../../../inputs/FileWhereInput");
let DeleteManyFileArgs = class DeleteManyFileArgs {
};
exports.DeleteManyFileArgs = DeleteManyFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], DeleteManyFileArgs.prototype, "where", void 0);
exports.DeleteManyFileArgs = DeleteManyFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyFileArgs);
