"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePriorityOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
let FindUniquePriorityOrThrowArgs = class FindUniquePriorityOrThrowArgs {
};
exports.FindUniquePriorityOrThrowArgs = FindUniquePriorityOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], FindUniquePriorityOrThrowArgs.prototype, "where", void 0);
exports.FindUniquePriorityOrThrowArgs = FindUniquePriorityOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePriorityOrThrowArgs);
