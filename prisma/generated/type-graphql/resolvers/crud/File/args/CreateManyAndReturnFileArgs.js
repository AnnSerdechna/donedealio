"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnFileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateManyInput_1 = require("../../../inputs/FileCreateManyInput");
let CreateManyAndReturnFileArgs = class CreateManyAndReturnFileArgs {
};
exports.CreateManyAndReturnFileArgs = CreateManyAndReturnFileArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileCreateManyInput_1.FileCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnFileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnFileArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAndReturnFileArgs = CreateManyAndReturnFileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnFileArgs);
