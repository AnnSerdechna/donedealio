"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriorityOrderByWithRelationInput = class PriorityOrderByWithRelationInput {
};
exports.PriorityOrderByWithRelationInput = PriorityOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityOrderByWithRelationInput.prototype, "color", void 0);
exports.PriorityOrderByWithRelationInput = PriorityOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityOrderByWithRelationInput", {})
], PriorityOrderByWithRelationInput);
