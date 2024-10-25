"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
let TaskPriorityArgs = class TaskPriorityArgs {
};
exports.TaskPriorityArgs = TaskPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], TaskPriorityArgs.prototype, "where", void 0);
exports.TaskPriorityArgs = TaskPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TaskPriorityArgs);
