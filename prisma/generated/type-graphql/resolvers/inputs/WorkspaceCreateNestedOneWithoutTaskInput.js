"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateNestedOneWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateOrConnectWithoutTaskInput_1 = require("../inputs/WorkspaceCreateOrConnectWithoutTaskInput");
const WorkspaceCreateWithoutTaskInput_1 = require("../inputs/WorkspaceCreateWithoutTaskInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceCreateNestedOneWithoutTaskInput = class WorkspaceCreateNestedOneWithoutTaskInput {
};
exports.WorkspaceCreateNestedOneWithoutTaskInput = WorkspaceCreateNestedOneWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput)
], WorkspaceCreateNestedOneWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutTaskInput_1.WorkspaceCreateOrConnectWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateOrConnectWithoutTaskInput_1.WorkspaceCreateOrConnectWithoutTaskInput)
], WorkspaceCreateNestedOneWithoutTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], WorkspaceCreateNestedOneWithoutTaskInput.prototype, "connect", void 0);
exports.WorkspaceCreateNestedOneWithoutTaskInput = WorkspaceCreateNestedOneWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateNestedOneWithoutTaskInput", {})
], WorkspaceCreateNestedOneWithoutTaskInput);
