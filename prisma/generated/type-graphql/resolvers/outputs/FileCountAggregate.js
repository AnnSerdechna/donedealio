"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileCountAggregate = class FileCountAggregate {
};
exports.FileCountAggregate = FileCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileCountAggregate.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileCountAggregate.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileCountAggregate.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FileCountAggregate.prototype, "_all", void 0);
exports.FileCountAggregate = FileCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FileCountAggregate", {})
], FileCountAggregate);
