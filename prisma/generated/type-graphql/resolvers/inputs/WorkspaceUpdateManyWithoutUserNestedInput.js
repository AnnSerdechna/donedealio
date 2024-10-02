"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateManyUserInputEnvelope_1 = require("../inputs/WorkspaceCreateManyUserInputEnvelope");
const WorkspaceCreateOrConnectWithoutUserInput_1 = require("../inputs/WorkspaceCreateOrConnectWithoutUserInput");
const WorkspaceCreateWithoutUserInput_1 = require("../inputs/WorkspaceCreateWithoutUserInput");
const WorkspaceScalarWhereInput_1 = require("../inputs/WorkspaceScalarWhereInput");
const WorkspaceUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/WorkspaceUpdateManyWithWhereWithoutUserInput");
const WorkspaceUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/WorkspaceUpdateWithWhereUniqueWithoutUserInput");
const WorkspaceUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/WorkspaceUpsertWithWhereUniqueWithoutUserInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceUpdateManyWithoutUserNestedInput = class WorkspaceUpdateManyWithoutUserNestedInput {
};
exports.WorkspaceUpdateManyWithoutUserNestedInput = WorkspaceUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateWithoutUserInput_1.WorkspaceCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceCreateOrConnectWithoutUserInput_1.WorkspaceCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceUpsertWithWhereUniqueWithoutUserInput_1.WorkspaceUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateManyUserInputEnvelope_1.WorkspaceCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateManyUserInputEnvelope_1.WorkspaceCreateManyUserInputEnvelope)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceUpdateWithWhereUniqueWithoutUserInput_1.WorkspaceUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceUpdateManyWithWhereWithoutUserInput_1.WorkspaceUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WorkspaceScalarWhereInput_1.WorkspaceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WorkspaceUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.WorkspaceUpdateManyWithoutUserNestedInput = WorkspaceUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateManyWithoutUserNestedInput", {})
], WorkspaceUpdateManyWithoutUserNestedInput);
