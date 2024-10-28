"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCountAggregate_1 = require("../outputs/StatusCountAggregate");
const StatusMaxAggregate_1 = require("../outputs/StatusMaxAggregate");
const StatusMinAggregate_1 = require("../outputs/StatusMinAggregate");
let AggregateStatus = class AggregateStatus {
};
exports.AggregateStatus = AggregateStatus;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCountAggregate_1.StatusCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCountAggregate_1.StatusCountAggregate)
], AggregateStatus.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusMinAggregate_1.StatusMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusMinAggregate_1.StatusMinAggregate)
], AggregateStatus.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusMaxAggregate_1.StatusMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusMaxAggregate_1.StatusMaxAggregate)
], AggregateStatus.prototype, "_max", void 0);
exports.AggregateStatus = AggregateStatus = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStatus", {})
], AggregateStatus);
