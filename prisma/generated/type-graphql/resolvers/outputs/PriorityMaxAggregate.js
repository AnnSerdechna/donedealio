"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriorityMaxAggregate = class PriorityMaxAggregate {
};
exports.PriorityMaxAggregate = PriorityMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMaxAggregate.prototype, "color", void 0);
exports.PriorityMaxAggregate = PriorityMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriorityMaxAggregate", {})
], PriorityMaxAggregate);
