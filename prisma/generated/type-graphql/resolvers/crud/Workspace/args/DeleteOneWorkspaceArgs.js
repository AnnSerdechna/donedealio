"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceWhereUniqueInput_1 = require("../../../inputs/WorkspaceWhereUniqueInput");
let DeleteOneWorkspaceArgs = class DeleteOneWorkspaceArgs {
};
exports.DeleteOneWorkspaceArgs = DeleteOneWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], DeleteOneWorkspaceArgs.prototype, "where", void 0);
exports.DeleteOneWorkspaceArgs = DeleteOneWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneWorkspaceArgs);
