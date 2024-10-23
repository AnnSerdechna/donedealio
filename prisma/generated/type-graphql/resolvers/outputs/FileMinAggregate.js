"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileMinAggregate = class FileMinAggregate {
};
exports.FileMinAggregate = FileMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinAggregate.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinAggregate.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FileMinAggregate.prototype, "taskId", void 0);
exports.FileMinAggregate = FileMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FileMinAggregate", {})
], FileMinAggregate);
