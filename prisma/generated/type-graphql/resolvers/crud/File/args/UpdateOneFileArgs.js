"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileUpdateInput_1 = require("../../../inputs/FileUpdateInput");
const FileWhereUniqueInput_1 = require("../../../inputs/FileWhereUniqueInput");
let UpdateOneFileArgs = class UpdateOneFileArgs {
};
exports.UpdateOneFileArgs = UpdateOneFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateInput_1.FileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileUpdateInput_1.FileUpdateInput)
], UpdateOneFileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], UpdateOneFileArgs.prototype, "where", void 0);
exports.UpdateOneFileArgs = UpdateOneFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneFileArgs);
