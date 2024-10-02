"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceUpdateInput_1 = require("../../../inputs/WorkspaceUpdateInput");
const WorkspaceWhereUniqueInput_1 = require("../../../inputs/WorkspaceWhereUniqueInput");
let UpdateOneWorkspaceArgs = class UpdateOneWorkspaceArgs {
};
exports.UpdateOneWorkspaceArgs = UpdateOneWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateInput_1.WorkspaceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateInput_1.WorkspaceUpdateInput)
], UpdateOneWorkspaceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], UpdateOneWorkspaceArgs.prototype, "where", void 0);
exports.UpdateOneWorkspaceArgs = UpdateOneWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneWorkspaceArgs);
