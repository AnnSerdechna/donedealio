"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateInput_1 = require("../../../inputs/WorkspaceCreateInput");
let CreateOneWorkspaceArgs = class CreateOneWorkspaceArgs {
};
exports.CreateOneWorkspaceArgs = CreateOneWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateInput_1.WorkspaceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateInput_1.WorkspaceCreateInput)
], CreateOneWorkspaceArgs.prototype, "data", void 0);
exports.CreateOneWorkspaceArgs = CreateOneWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneWorkspaceArgs);
