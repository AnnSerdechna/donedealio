"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriorityCountAggregate = class PriorityCountAggregate {
};
exports.PriorityCountAggregate = PriorityCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityCountAggregate.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityCountAggregate.prototype, "_all", void 0);
exports.PriorityCountAggregate = PriorityCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriorityCountAggregate", {})
], PriorityCountAggregate);
