"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusType_1 = require("../../enums/StatusType");
let StatusMinAggregate = class StatusMinAggregate {
};
exports.StatusMinAggregate = StatusMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatusMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMinAggregate.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMinAggregate.prototype, "type", void 0);
exports.StatusMinAggregate = StatusMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatusMinAggregate", {})
], StatusMinAggregate);
