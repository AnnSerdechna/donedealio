"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FileSumAggregate = class FileSumAggregate {
};
exports.FileSumAggregate = FileSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FileSumAggregate.prototype, "id", void 0);
exports.FileSumAggregate = FileSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FileSumAggregate", {})
], FileSumAggregate);
