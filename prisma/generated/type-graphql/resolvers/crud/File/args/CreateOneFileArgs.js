"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateInput_1 = require("../../../inputs/FileCreateInput");
let CreateOneFileArgs = class CreateOneFileArgs {
};
exports.CreateOneFileArgs = CreateOneFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateInput_1.FileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileCreateInput_1.FileCreateInput)
], CreateOneFileArgs.prototype, "data", void 0);
exports.CreateOneFileArgs = CreateOneFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneFileArgs);
