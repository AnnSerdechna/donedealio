"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusAvgAggregate_1 = require("../outputs/StatusAvgAggregate");
const StatusCountAggregate_1 = require("../outputs/StatusCountAggregate");
const StatusMaxAggregate_1 = require("../outputs/StatusMaxAggregate");
const StatusMinAggregate_1 = require("../outputs/StatusMinAggregate");
const StatusSumAggregate_1 = require("../outputs/StatusSumAggregate");
let StatusGroupBy = class StatusGroupBy {
};
exports.StatusGroupBy = StatusGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StatusGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusGroupBy.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCountAggregate_1.StatusCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCountAggregate_1.StatusCountAggregate)
], StatusGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusAvgAggregate_1.StatusAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusAvgAggregate_1.StatusAvgAggregate)
], StatusGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusSumAggregate_1.StatusSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusSumAggregate_1.StatusSumAggregate)
], StatusGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusMinAggregate_1.StatusMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusMinAggregate_1.StatusMinAggregate)
], StatusGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusMaxAggregate_1.StatusMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusMaxAggregate_1.StatusMaxAggregate)
], StatusGroupBy.prototype, "_max", void 0);
exports.StatusGroupBy = StatusGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatusGroupBy", {})
], StatusGroupBy);
