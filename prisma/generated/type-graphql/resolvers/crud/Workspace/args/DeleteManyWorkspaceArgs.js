"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceWhereInput_1 = require("../../../inputs/WorkspaceWhereInput");
let DeleteManyWorkspaceArgs = class DeleteManyWorkspaceArgs {
};
exports.DeleteManyWorkspaceArgs = DeleteManyWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], DeleteManyWorkspaceArgs.prototype, "where", void 0);
exports.DeleteManyWorkspaceArgs = DeleteManyWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyWorkspaceArgs);
