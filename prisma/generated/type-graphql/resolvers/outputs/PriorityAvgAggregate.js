"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriorityAvgAggregate = class PriorityAvgAggregate {
};
exports.PriorityAvgAggregate = PriorityAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityAvgAggregate.prototype, "id", void 0);
exports.PriorityAvgAggregate = PriorityAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriorityAvgAggregate", {})
], PriorityAvgAggregate);
