"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatusAvgAggregate = class StatusAvgAggregate {
};
exports.StatusAvgAggregate = StatusAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatusAvgAggregate.prototype, "id", void 0);
exports.StatusAvgAggregate = StatusAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatusAvgAggregate", {})
], StatusAvgAggregate);
