"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCount_1 = require("../resolvers/outputs/PriorityCount");
let Priority = class Priority {
};
exports.Priority = Priority;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Priority.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Priority.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Priority.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCount_1.PriorityCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCount_1.PriorityCount)
], Priority.prototype, "_count", void 0);
exports.Priority = Priority = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Priority", {})
], Priority);
