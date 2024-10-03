"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpsertWithWhereUniqueWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateWithoutTaskInput_1 = require("../inputs/FileCreateWithoutTaskInput");
const FileUpdateWithoutTaskInput_1 = require("../inputs/FileUpdateWithoutTaskInput");
const FileWhereUniqueInput_1 = require("../inputs/FileWhereUniqueInput");
let FileUpsertWithWhereUniqueWithoutTaskInput = class FileUpsertWithWhereUniqueWithoutTaskInput {
};
exports.FileUpsertWithWhereUniqueWithoutTaskInput = FileUpsertWithWhereUniqueWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], FileUpsertWithWhereUniqueWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateWithoutTaskInput_1.FileUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileUpdateWithoutTaskInput_1.FileUpdateWithoutTaskInput)
], FileUpsertWithWhereUniqueWithoutTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateWithoutTaskInput_1.FileCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileCreateWithoutTaskInput_1.FileCreateWithoutTaskInput)
], FileUpsertWithWhereUniqueWithoutTaskInput.prototype, "create", void 0);
exports.FileUpsertWithWhereUniqueWithoutTaskInput = FileUpsertWithWhereUniqueWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileUpsertWithWhereUniqueWithoutTaskInput", {})
], FileUpsertWithWhereUniqueWithoutTaskInput);
