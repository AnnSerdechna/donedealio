"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPriorityOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityOrderByWithRelationInput_1 = require("../../../inputs/PriorityOrderByWithRelationInput");
const PriorityWhereInput_1 = require("../../../inputs/PriorityWhereInput");
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
const PriorityScalarFieldEnum_1 = require("../../../../enums/PriorityScalarFieldEnum");
let FindFirstPriorityOrThrowArgs = class FindFirstPriorityOrThrowArgs {
};
exports.FindFirstPriorityOrThrowArgs = FindFirstPriorityOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], FindFirstPriorityOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrderByWithRelationInput_1.PriorityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPriorityOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], FindFirstPriorityOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPriorityOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPriorityOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityScalarFieldEnum_1.PriorityScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPriorityOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstPriorityOrThrowArgs = FindFirstPriorityOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPriorityOrThrowArgs);
