"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let WorkspaceCreateManyUserInput = class WorkspaceCreateManyUserInput {
};
exports.WorkspaceCreateManyUserInput = WorkspaceCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateManyUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WorkspaceCreateManyUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WorkspaceCreateManyUserInput.prototype, "updatedAt", void 0);
exports.WorkspaceCreateManyUserInput = WorkspaceCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceCreateManyUserInput", {})
], WorkspaceCreateManyUserInput);
