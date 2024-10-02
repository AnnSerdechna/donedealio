"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateWithoutUserInput_1 = require("../inputs/WorkspaceCreateWithoutUserInput");
const WorkspaceUpdateWithoutUserInput_1 = require("../inputs/WorkspaceUpdateWithoutUserInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceUpsertWithWhereUniqueWithoutUserInput = class WorkspaceUpsertWithWhereUniqueWithoutUserInput {
};
exports.WorkspaceUpsertWithWhereUniqueWithoutUserInput = WorkspaceUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], WorkspaceUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateWithoutUserInput_1.WorkspaceUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateWithoutUserInput_1.WorkspaceUpdateWithoutUserInput)
], WorkspaceUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateWithoutUserInput_1.WorkspaceCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateWithoutUserInput_1.WorkspaceCreateWithoutUserInput)
], WorkspaceUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.WorkspaceUpsertWithWhereUniqueWithoutUserInput = WorkspaceUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpsertWithWhereUniqueWithoutUserInput", {})
], WorkspaceUpsertWithWhereUniqueWithoutUserInput);
