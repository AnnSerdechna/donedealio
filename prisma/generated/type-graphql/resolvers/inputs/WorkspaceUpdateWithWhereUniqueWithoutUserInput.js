"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceUpdateWithoutUserInput_1 = require("../inputs/WorkspaceUpdateWithoutUserInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceUpdateWithWhereUniqueWithoutUserInput = class WorkspaceUpdateWithWhereUniqueWithoutUserInput {
};
exports.WorkspaceUpdateWithWhereUniqueWithoutUserInput = WorkspaceUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], WorkspaceUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateWithoutUserInput_1.WorkspaceUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateWithoutUserInput_1.WorkspaceUpdateWithoutUserInput)
], WorkspaceUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.WorkspaceUpdateWithWhereUniqueWithoutUserInput = WorkspaceUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateWithWhereUniqueWithoutUserInput", {})
], WorkspaceUpdateWithWhereUniqueWithoutUserInput);
