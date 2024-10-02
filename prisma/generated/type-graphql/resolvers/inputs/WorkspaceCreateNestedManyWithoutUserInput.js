"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateManyUserInputEnvelope_1 = require("../inputs/WorkspaceCreateManyUserInputEnvelope");
const WorkspaceCreateOrConnectWithoutUserInput_1 = require("../inputs/WorkspaceCreateOrConnectWithoutUserInput");
const WorkspaceCreateWithoutUserInput_1 = require("../inputs/WorkspaceCreateWithoutUserInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceCreateNestedManyWithoutUserInput = class WorkspaceCreateNestedManyWithoutUserInput {
};
exports.WorkspaceCreateNestedManyWithoutUserInput = WorkspaceCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateWithoutUserInput_1.WorkspaceCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateOrConnectWithoutUserInput_1.WorkspaceCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateManyUserInputEnvelope_1.WorkspaceCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateManyUserInputEnvelope_1.WorkspaceCreateManyUserInputEnvelope)
], WorkspaceCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.WorkspaceCreateNestedManyWithoutUserInput = WorkspaceCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateNestedManyWithoutUserInput", {})
], WorkspaceCreateNestedManyWithoutUserInput);
