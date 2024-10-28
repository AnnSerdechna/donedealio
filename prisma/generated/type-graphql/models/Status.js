"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusType_1 = require("../enums/StatusType");
const StatusCount_1 = require("../resolvers/outputs/StatusCount");
let Status = class Status {
};
exports.Status = Status;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCount_1.StatusCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCount_1.StatusCount)
], Status.prototype, "_count", void 0);
exports.Status = Status = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Status", {})
], Status);
