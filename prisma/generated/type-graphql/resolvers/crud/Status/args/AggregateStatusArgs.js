"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusOrderByWithRelationInput_1 = require("../../../inputs/StatusOrderByWithRelationInput");
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
const StatusWhereUniqueInput_1 = require("../../../inputs/StatusWhereUniqueInput");
let AggregateStatusArgs = class AggregateStatusArgs {
};
exports.AggregateStatusArgs = AggregateStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], AggregateStatusArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusOrderByWithRelationInput_1.StatusOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateStatusArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], AggregateStatusArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStatusArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStatusArgs.prototype, "skip", void 0);
exports.AggregateStatusArgs = AggregateStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateStatusArgs);
