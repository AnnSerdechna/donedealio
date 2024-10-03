"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateNestedManyWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateManyTaskInputEnvelope_1 = require("../inputs/FileCreateManyTaskInputEnvelope");
const FileCreateOrConnectWithoutTaskInput_1 = require("../inputs/FileCreateOrConnectWithoutTaskInput");
const FileCreateWithoutTaskInput_1 = require("../inputs/FileCreateWithoutTaskInput");
const FileWhereUniqueInput_1 = require("../inputs/FileWhereUniqueInput");
let FileCreateNestedManyWithoutTaskInput = class FileCreateNestedManyWithoutTaskInput {
};
exports.FileCreateNestedManyWithoutTaskInput = FileCreateNestedManyWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileCreateWithoutTaskInput_1.FileCreateWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileCreateNestedManyWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileCreateOrConnectWithoutTaskInput_1.FileCreateOrConnectWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileCreateNestedManyWithoutTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateManyTaskInputEnvelope_1.FileCreateManyTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FileCreateManyTaskInputEnvelope_1.FileCreateManyTaskInputEnvelope)
], FileCreateNestedManyWithoutTaskInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileWhereUniqueInput_1.FileWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FileCreateNestedManyWithoutTaskInput.prototype, "connect", void 0);
exports.FileCreateNestedManyWithoutTaskInput = FileCreateNestedManyWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateNestedManyWithoutTaskInput", {})
], FileCreateNestedManyWithoutTaskInput);
