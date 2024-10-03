"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateOrConnectWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateWithoutTaskInput_1 = require("../inputs/FileCreateWithoutTaskInput");
const FileWhereUniqueInput_1 = require("../inputs/FileWhereUniqueInput");
let FileCreateOrConnectWithoutTaskInput = class FileCreateOrConnectWithoutTaskInput {
};
exports.FileCreateOrConnectWithoutTaskInput = FileCreateOrConnectWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileWhereUniqueInput_1.FileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileWhereUniqueInput_1.FileWhereUniqueInput)
], FileCreateOrConnectWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileCreateWithoutTaskInput_1.FileCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileCreateWithoutTaskInput_1.FileCreateWithoutTaskInput)
], FileCreateOrConnectWithoutTaskInput.prototype, "create", void 0);
exports.FileCreateOrConnectWithoutTaskInput = FileCreateOrConnectWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateOrConnectWithoutTaskInput", {})
], FileCreateOrConnectWithoutTaskInput);
