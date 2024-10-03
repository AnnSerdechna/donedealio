"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileUpdateManyMutationInput_1 = require("../../../inputs/FileUpdateManyMutationInput");
const FileWhereInput_1 = require("../../../inputs/FileWhereInput");
let UpdateManyFileArgs = class UpdateManyFileArgs {
};
exports.UpdateManyFileArgs = UpdateManyFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateManyMutationInput_1.FileUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileUpdateManyMutationInput_1.FileUpdateManyMutationInput)
], UpdateManyFileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereInput_1.FileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileWhereInput_1.FileWhereInput)
], UpdateManyFileArgs.prototype, "where", void 0);
exports.UpdateManyFileArgs = UpdateManyFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFileArgs);
