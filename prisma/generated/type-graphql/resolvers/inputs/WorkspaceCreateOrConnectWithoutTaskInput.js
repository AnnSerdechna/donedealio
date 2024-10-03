"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateOrConnectWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateWithoutTaskInput_1 = require("../inputs/WorkspaceCreateWithoutTaskInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceCreateOrConnectWithoutTaskInput = class WorkspaceCreateOrConnectWithoutTaskInput {
};
exports.WorkspaceCreateOrConnectWithoutTaskInput = WorkspaceCreateOrConnectWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], WorkspaceCreateOrConnectWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput)
], WorkspaceCreateOrConnectWithoutTaskInput.prototype, "create", void 0);
exports.WorkspaceCreateOrConnectWithoutTaskInput = WorkspaceCreateOrConnectWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateOrConnectWithoutTaskInput", {})
], WorkspaceCreateOrConnectWithoutTaskInput);
