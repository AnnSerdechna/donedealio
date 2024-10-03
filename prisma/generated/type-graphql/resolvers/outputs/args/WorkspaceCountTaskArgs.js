"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCountTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereInput_1 = require("../../inputs/TaskWhereInput");
let WorkspaceCountTaskArgs = class WorkspaceCountTaskArgs {
};
exports.WorkspaceCountTaskArgs = WorkspaceCountTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], WorkspaceCountTaskArgs.prototype, "where", void 0);
exports.WorkspaceCountTaskArgs = WorkspaceCountTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], WorkspaceCountTaskArgs);
