"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereInput_1 = require("../inputs/StatusWhereInput");
let StatusNullableRelationFilter = class StatusNullableRelationFilter {
};
exports.StatusNullableRelationFilter = StatusNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], StatusNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], StatusNullableRelationFilter.prototype, "isNot", void 0);
exports.StatusNullableRelationFilter = StatusNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusNullableRelationFilter", {})
], StatusNullableRelationFilter);
