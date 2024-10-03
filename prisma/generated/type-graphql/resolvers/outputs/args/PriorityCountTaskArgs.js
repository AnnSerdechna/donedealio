"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCountTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereInput_1 = require("../../inputs/TaskWhereInput");
let PriorityCountTaskArgs = class PriorityCountTaskArgs {
};
exports.PriorityCountTaskArgs = PriorityCountTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], PriorityCountTaskArgs.prototype, "where", void 0);
exports.PriorityCountTaskArgs = PriorityCountTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PriorityCountTaskArgs);
