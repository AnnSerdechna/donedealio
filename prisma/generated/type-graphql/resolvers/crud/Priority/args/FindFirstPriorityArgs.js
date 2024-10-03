"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityOrderByWithRelationInput_1 = require("../../../inputs/PriorityOrderByWithRelationInput");
const PriorityWhereInput_1 = require("../../../inputs/PriorityWhereInput");
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
const PriorityScalarFieldEnum_1 = require("../../../../enums/PriorityScalarFieldEnum");
let FindFirstPriorityArgs = class FindFirstPriorityArgs {
};
exports.FindFirstPriorityArgs = FindFirstPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], FindFirstPriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrderByWithRelationInput_1.PriorityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPriorityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], FindFirstPriorityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPriorityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPriorityArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityScalarFieldEnum_1.PriorityScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPriorityArgs.prototype, "distinct", void 0);
exports.FindFirstPriorityArgs = FindFirstPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPriorityArgs);
