"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
let FindUniquePriorityArgs = class FindUniquePriorityArgs {
};
exports.FindUniquePriorityArgs = FindUniquePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], FindUniquePriorityArgs.prototype, "where", void 0);
exports.FindUniquePriorityArgs = FindUniquePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePriorityArgs);
