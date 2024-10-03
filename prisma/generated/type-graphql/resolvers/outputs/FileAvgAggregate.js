"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileAvgAggregate = class FileAvgAggregate {
};
exports.FileAvgAggregate = FileAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileAvgAggregate.prototype, "id", void 0);
exports.FileAvgAggregate = FileAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FileAvgAggregate", {})
], FileAvgAggregate);
