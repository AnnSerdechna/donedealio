"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpdateManyWithWhereWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileScalarWhereInput_1 = require("../inputs/FileScalarWhereInput");
const FileUpdateManyMutationInput_1 = require("../inputs/FileUpdateManyMutationInput");
let FileUpdateManyWithWhereWithoutTaskInput = class FileUpdateManyWithWhereWithoutTaskInput {
};
exports.FileUpdateManyWithWhereWithoutTaskInput = FileUpdateManyWithWhereWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileScalarWhereInput_1.FileScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileScalarWhereInput_1.FileScalarWhereInput)
], FileUpdateManyWithWhereWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FileUpdateManyMutationInput_1.FileUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FileUpdateManyMutationInput_1.FileUpdateManyMutationInput)
], FileUpdateManyWithWhereWithoutTaskInput.prototype, "data", void 0);
exports.FileUpdateManyWithWhereWithoutTaskInput = FileUpdateManyWithWhereWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FileUpdateManyWithWhereWithoutTaskInput", {})
], FileUpdateManyWithWhereWithoutTaskInput);
