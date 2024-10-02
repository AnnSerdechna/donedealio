"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateWithoutUserInput_1 = require("../inputs/WorkspaceCreateWithoutUserInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceCreateOrConnectWithoutUserInput = class WorkspaceCreateOrConnectWithoutUserInput {
};
exports.WorkspaceCreateOrConnectWithoutUserInput = WorkspaceCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], WorkspaceCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateWithoutUserInput_1.WorkspaceCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateWithoutUserInput_1.WorkspaceCreateWithoutUserInput)
], WorkspaceCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.WorkspaceCreateOrConnectWithoutUserInput = WorkspaceCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateOrConnectWithoutUserInput", {})
], WorkspaceCreateOrConnectWithoutUserInput);
