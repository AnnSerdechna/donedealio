"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatusMaxAggregate = class StatusMaxAggregate {
};
exports.StatusMaxAggregate = StatusMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatusMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusMaxAggregate.prototype, "color", void 0);
exports.StatusMaxAggregate = StatusMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatusMaxAggregate", {})
], StatusMaxAggregate);
