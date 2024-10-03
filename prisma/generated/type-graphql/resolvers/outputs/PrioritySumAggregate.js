"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrioritySumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PrioritySumAggregate = class PrioritySumAggregate {
};
exports.PrioritySumAggregate = PrioritySumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PrioritySumAggregate.prototype, "id", void 0);
exports.PrioritySumAggregate = PrioritySumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PrioritySumAggregate", {})
], PrioritySumAggregate);
