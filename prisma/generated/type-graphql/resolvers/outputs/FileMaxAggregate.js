"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileMaxAggregate = class FileMaxAggregate {
};
exports.FileMaxAggregate = FileMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxAggregate.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxAggregate.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMaxAggregate.prototype, "taskId", void 0);
exports.FileMaxAggregate = FileMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FileMaxAggregate", {})
], FileMaxAggregate);
