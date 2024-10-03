"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateToOneWithWhereWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceUpdateWithoutTaskInput_1 = require("../inputs/WorkspaceUpdateWithoutTaskInput");
const WorkspaceWhereInput_1 = require("../inputs/WorkspaceWhereInput");
let WorkspaceUpdateToOneWithWhereWithoutTaskInput = class WorkspaceUpdateToOneWithWhereWithoutTaskInput {
};
exports.WorkspaceUpdateToOneWithWhereWithoutTaskInput = WorkspaceUpdateToOneWithWhereWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceUpdateToOneWithWhereWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateWithoutTaskInput_1.WorkspaceUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateWithoutTaskInput_1.WorkspaceUpdateWithoutTaskInput)
], WorkspaceUpdateToOneWithWhereWithoutTaskInput.prototype, "data", void 0);
exports.WorkspaceUpdateToOneWithWhereWithoutTaskInput = WorkspaceUpdateToOneWithWhereWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateToOneWithWhereWithoutTaskInput", {})
], WorkspaceUpdateToOneWithWhereWithoutTaskInput);
