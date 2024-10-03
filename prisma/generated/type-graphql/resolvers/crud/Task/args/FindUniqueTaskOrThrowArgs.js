"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
let FindUniqueTaskOrThrowArgs = class FindUniqueTaskOrThrowArgs {
};
exports.FindUniqueTaskOrThrowArgs = FindUniqueTaskOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], FindUniqueTaskOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueTaskOrThrowArgs = FindUniqueTaskOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaskOrThrowArgs);
