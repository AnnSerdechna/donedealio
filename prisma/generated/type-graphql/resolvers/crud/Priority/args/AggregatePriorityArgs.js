"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityOrderByWithRelationInput_1 = require("../../../inputs/PriorityOrderByWithRelationInput");
const PriorityWhereInput_1 = require("../../../inputs/PriorityWhereInput");
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
let AggregatePriorityArgs = class AggregatePriorityArgs {
};
exports.AggregatePriorityArgs = AggregatePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], AggregatePriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityOrderByWithRelationInput_1.PriorityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePriorityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], AggregatePriorityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePriorityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePriorityArgs.prototype, "skip", void 0);
exports.AggregatePriorityArgs = AggregatePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePriorityArgs);
