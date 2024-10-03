"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateWithWhereUniqueWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileUpdateWithoutTaskInput_1 = require("../inputs/FileUpdateWithoutTaskInput");
const FileWhereUniqueInput_1 = require("../inputs/FileWhereUniqueInput");
let FileUpdateWithWhereUniqueWithoutTaskInput = class FileUpdateWithWhereUniqueWithoutTaskInput {
};
exports.FileUpdateWithWhereUniqueWithoutTaskInput = FileUpdateWithWhereUniqueWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], FileUpdateWithWhereUniqueWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateWithoutTaskInput_1.FileUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileUpdateWithoutTaskInput_1.FileUpdateWithoutTaskInput)
], FileUpdateWithWhereUniqueWithoutTaskInput.prototype, "data", void 0);
exports.FileUpdateWithWhereUniqueWithoutTaskInput = FileUpdateWithWhereUniqueWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileUpdateWithWhereUniqueWithoutTaskInput", {})
], FileUpdateWithWhereUniqueWithoutTaskInput);
