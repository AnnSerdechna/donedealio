"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
let TaskStatusArgs = class TaskStatusArgs {
};
exports.TaskStatusArgs = TaskStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], TaskStatusArgs.prototype, "where", void 0);
exports.TaskStatusArgs = TaskStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TaskStatusArgs);
