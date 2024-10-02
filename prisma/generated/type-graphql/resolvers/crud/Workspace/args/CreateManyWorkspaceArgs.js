"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateManyInput_1 = require("../../../inputs/WorkspaceCreateManyInput");
let CreateManyWorkspaceArgs = class CreateManyWorkspaceArgs {
};
exports.CreateManyWorkspaceArgs = CreateManyWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateManyInput_1.WorkspaceCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyWorkspaceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyWorkspaceArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyWorkspaceArgs = CreateManyWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyWorkspaceArgs);
