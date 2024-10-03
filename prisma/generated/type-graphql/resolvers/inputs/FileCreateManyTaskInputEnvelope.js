"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCreateManyTaskInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FileCreateManyTaskInput_1 = require("../inputs/FileCreateManyTaskInput");
let FileCreateManyTaskInputEnvelope = class FileCreateManyTaskInputEnvelope {
};
exports.FileCreateManyTaskInputEnvelope = FileCreateManyTaskInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FileCreateManyTaskInput_1.FileCreateManyTaskInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FileCreateManyTaskInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FileCreateManyTaskInputEnvelope.prototype, "skipDuplicates", void 0);
exports.FileCreateManyTaskInputEnvelope = FileCreateManyTaskInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FileCreateManyTaskInputEnvelope", {})
], FileCreateManyTaskInputEnvelope);
