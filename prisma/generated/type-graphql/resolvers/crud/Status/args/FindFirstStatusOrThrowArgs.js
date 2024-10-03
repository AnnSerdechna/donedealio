"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStatusOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusOrderByWithRelationInput_1 = require("../../../inputs/StatusOrderByWithRelationInput");
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
const StatusWhereUniqueInput_1 = require("../../../inputs/StatusWhereUniqueInput");
const StatusScalarFieldEnum_1 = require("../../../../enums/StatusScalarFieldEnum");
let FindFirstStatusOrThrowArgs = class FindFirstStatusOrThrowArgs {
};
exports.FindFirstStatusOrThrowArgs = FindFirstStatusOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], FindFirstStatusOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusOrderByWithRelationInput_1.StatusOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStatusOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], FindFirstStatusOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStatusOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStatusOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusScalarFieldEnum_1.StatusScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStatusOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstStatusOrThrowArgs = FindFirstStatusOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstStatusOrThrowArgs);
