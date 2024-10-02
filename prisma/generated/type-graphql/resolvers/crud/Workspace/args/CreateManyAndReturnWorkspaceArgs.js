"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnWorkspaceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateManyInput_1 = require("../../../inputs/WorkspaceCreateManyInput");
let CreateManyAndReturnWorkspaceArgs = class CreateManyAndReturnWorkspaceArgs {
};
exports.CreateManyAndReturnWorkspaceArgs = CreateManyAndReturnWorkspaceArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateManyInput_1.WorkspaceCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnWorkspaceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnWorkspaceArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAndReturnWorkspaceArgs = CreateManyAndReturnWorkspaceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnWorkspaceArgs);
