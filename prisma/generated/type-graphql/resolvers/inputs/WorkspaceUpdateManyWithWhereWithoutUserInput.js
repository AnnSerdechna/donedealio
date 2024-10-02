"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceScalarWhereInput_1 = require("../inputs/WorkspaceScalarWhereInput");
const WorkspaceUpdateManyMutationInput_1 = require("../inputs/WorkspaceUpdateManyMutationInput");
let WorkspaceUpdateManyWithWhereWithoutUserInput = class WorkspaceUpdateManyWithWhereWithoutUserInput {
};
exports.WorkspaceUpdateManyWithWhereWithoutUserInput = WorkspaceUpdateManyWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceScalarWhereInput_1.WorkspaceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceScalarWhereInput_1.WorkspaceScalarWhereInput)
], WorkspaceUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateManyMutationInput_1.WorkspaceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateManyMutationInput_1.WorkspaceUpdateManyMutationInput)
], WorkspaceUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.WorkspaceUpdateManyWithWhereWithoutUserInput = WorkspaceUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateManyWithWhereWithoutUserInput", {})
], WorkspaceUpdateManyWithWhereWithoutUserInput);
