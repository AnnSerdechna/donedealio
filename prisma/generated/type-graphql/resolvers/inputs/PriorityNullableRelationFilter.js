"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityWhereInput_1 = require("../inputs/PriorityWhereInput");
let PriorityNullableRelationFilter = class PriorityNullableRelationFilter {
};
exports.PriorityNullableRelationFilter = PriorityNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], PriorityNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], PriorityNullableRelationFilter.prototype, "isNot", void 0);
exports.PriorityNullableRelationFilter = PriorityNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityNullableRelationFilter", {})
], PriorityNullableRelationFilter);
