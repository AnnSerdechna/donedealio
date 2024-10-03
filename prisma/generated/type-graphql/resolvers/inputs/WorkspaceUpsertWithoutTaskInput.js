"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpsertWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateWithoutTaskInput_1 = require("../inputs/WorkspaceCreateWithoutTaskInput");
const WorkspaceUpdateWithoutTaskInput_1 = require("../inputs/WorkspaceUpdateWithoutTaskInput");
const WorkspaceWhereInput_1 = require("../inputs/WorkspaceWhereInput");
let WorkspaceUpsertWithoutTaskInput = class WorkspaceUpsertWithoutTaskInput {
};
exports.WorkspaceUpsertWithoutTaskInput = WorkspaceUpsertWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateWithoutTaskInput_1.WorkspaceUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateWithoutTaskInput_1.WorkspaceUpdateWithoutTaskInput)
], WorkspaceUpsertWithoutTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput)
], WorkspaceUpsertWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], WorkspaceUpsertWithoutTaskInput.prototype, "where", void 0);
exports.WorkspaceUpsertWithoutTaskInput = WorkspaceUpsertWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpsertWithoutTaskInput", {})
], WorkspaceUpsertWithoutTaskInput);
