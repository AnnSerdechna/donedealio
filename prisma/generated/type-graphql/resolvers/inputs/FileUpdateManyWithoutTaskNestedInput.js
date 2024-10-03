"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateManyWithoutTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateManyTaskInputEnvelope_1 = require("../inputs/FileCreateManyTaskInputEnvelope");
const FileCreateOrConnectWithoutTaskInput_1 = require("../inputs/FileCreateOrConnectWithoutTaskInput");
const FileCreateWithoutTaskInput_1 = require("../inputs/FileCreateWithoutTaskInput");
const FileScalarWhereInput_1 = require("../inputs/FileScalarWhereInput");
const FileUpdateManyWithWhereWithoutTaskInput_1 = require("../inputs/FileUpdateManyWithWhereWithoutTaskInput");
const FileUpdateWithWhereUniqueWithoutTaskInput_1 = require("../inputs/FileUpdateWithWhereUniqueWithoutTaskInput");
const FileUpsertWithWhereUniqueWithoutTaskInput_1 = require("../inputs/FileUpsertWithWhereUniqueWithoutTaskInput");
const FileWhereUniqueInput_1 = require("../inputs/FileWhereUniqueInput");
let FileUpdateManyWithoutTaskNestedInput = class FileUpdateManyWithoutTaskNestedInput {
};
exports.FileUpdateManyWithoutTaskNestedInput = FileUpdateManyWithoutTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileCreateWithoutTaskInput_1.FileCreateWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutTaskInput_1.FileCreateOrConnectWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileUpsertWithWhereUniqueWithoutTaskInput_1.FileUpsertWithWhereUniqueWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateManyTaskInputEnvelope_1.FileCreateManyTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCreateManyTaskInputEnvelope_1.FileCreateManyTaskInputEnvelope)
], FileUpdateManyWithoutTaskNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereUniqueInput_1.FileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereUniqueInput_1.FileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereUniqueInput_1.FileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereUniqueInput_1.FileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileUpdateWithWhereUniqueWithoutTaskInput_1.FileUpdateWithWhereUniqueWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileUpdateManyWithWhereWithoutTaskInput_1.FileUpdateManyWithWhereWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileScalarWhereInput_1.FileScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileUpdateManyWithoutTaskNestedInput.prototype, "deleteMany", void 0);
exports.FileUpdateManyWithoutTaskNestedInput = FileUpdateManyWithoutTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileUpdateManyWithoutTaskNestedInput", {})
], FileUpdateManyWithoutTaskNestedInput);
