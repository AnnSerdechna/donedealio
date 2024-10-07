"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriorityMinAggregate = class PriorityMinAggregate {
};
exports.PriorityMinAggregate = PriorityMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityMinAggregate.prototype, "color", void 0);
exports.PriorityMinAggregate = PriorityMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriorityMinAggregate", {})
], PriorityMinAggregate);
