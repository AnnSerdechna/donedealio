"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceUpdateManyMutationInput_1 = require("../../../inputs/WorkspaceUpdateManyMutationInput");
const WorkspaceWhereInput_1 = require("../../../inputs/WorkspaceWhereInput");
let UpdateManyWorkspaceArgs = class UpdateManyWorkspaceArgs {
};
exports.UpdateManyWorkspaceArgs = UpdateManyWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateManyMutationInput_1.WorkspaceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateManyMutationInput_1.WorkspaceUpdateManyMutationInput)
], UpdateManyWorkspaceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], UpdateManyWorkspaceArgs.prototype, "where", void 0);
exports.UpdateManyWorkspaceArgs = UpdateManyWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyWorkspaceArgs);
