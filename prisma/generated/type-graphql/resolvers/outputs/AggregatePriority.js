"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePriority = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityAvgAggregate_1 = require("../outputs/PriorityAvgAggregate");
const PriorityCountAggregate_1 = require("../outputs/PriorityCountAggregate");
const PriorityMaxAggregate_1 = require("../outputs/PriorityMaxAggregate");
const PriorityMinAggregate_1 = require("../outputs/PriorityMinAggregate");
const PrioritySumAggregate_1 = require("../outputs/PrioritySumAggregate");
let AggregatePriority = class AggregatePriority {
};
exports.AggregatePriority = AggregatePriority;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCountAggregate_1.PriorityCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCountAggregate_1.PriorityCountAggregate)
], AggregatePriority.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityAvgAggregate_1.PriorityAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityAvgAggregate_1.PriorityAvgAggregate)
], AggregatePriority.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PrioritySumAggregate_1.PrioritySumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PrioritySumAggregate_1.PrioritySumAggregate)
], AggregatePriority.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityMinAggregate_1.PriorityMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityMinAggregate_1.PriorityMinAggregate)
], AggregatePriority.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityMaxAggregate_1.PriorityMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityMaxAggregate_1.PriorityMaxAggregate)
], AggregatePriority.prototype, "_max", void 0);
exports.AggregatePriority = AggregatePriority = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePriority", {})
], AggregatePriority);
