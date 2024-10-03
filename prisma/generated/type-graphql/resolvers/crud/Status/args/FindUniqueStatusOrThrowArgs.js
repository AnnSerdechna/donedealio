"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStatusOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereUniqueInput_1 = require("../../../inputs/StatusWhereUniqueInput");
let FindUniqueStatusOrThrowArgs = class FindUniqueStatusOrThrowArgs {
};
exports.FindUniqueStatusOrThrowArgs = FindUniqueStatusOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], FindUniqueStatusOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueStatusOrThrowArgs = FindUniqueStatusOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueStatusOrThrowArgs);
