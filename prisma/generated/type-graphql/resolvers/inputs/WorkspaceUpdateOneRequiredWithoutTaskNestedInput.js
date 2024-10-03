"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceUpdateOneRequiredWithoutTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCreateOrConnectWithoutTaskInput_1 = require("../inputs/WorkspaceCreateOrConnectWithoutTaskInput");
const WorkspaceCreateWithoutTaskInput_1 = require("../inputs/WorkspaceCreateWithoutTaskInput");
const WorkspaceUpdateToOneWithWhereWithoutTaskInput_1 = require("../inputs/WorkspaceUpdateToOneWithWhereWithoutTaskInput");
const WorkspaceUpsertWithoutTaskInput_1 = require("../inputs/WorkspaceUpsertWithoutTaskInput");
const WorkspaceWhereUniqueInput_1 = require("../inputs/WorkspaceWhereUniqueInput");
let WorkspaceUpdateOneRequiredWithoutTaskNestedInput = class WorkspaceUpdateOneRequiredWithoutTaskNestedInput {
};
exports.WorkspaceUpdateOneRequiredWithoutTaskNestedInput = WorkspaceUpdateOneRequiredWithoutTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateWithoutTaskInput_1.WorkspaceCreateWithoutTaskInput)
], WorkspaceUpdateOneRequiredWithoutTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceCreateOrConnectWithoutTaskInput_1.WorkspaceCreateOrConnectWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceCreateOrConnectWithoutTaskInput_1.WorkspaceCreateOrConnectWithoutTaskInput)
], WorkspaceUpdateOneRequiredWithoutTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpsertWithoutTaskInput_1.WorkspaceUpsertWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceUpsertWithoutTaskInput_1.WorkspaceUpsertWithoutTaskInput)
], WorkspaceUpdateOneRequiredWithoutTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereUniqueInput_1.WorkspaceWhereUniqueInput)
], WorkspaceUpdateOneRequiredWithoutTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceUpdateToOneWithWhereWithoutTaskInput_1.WorkspaceUpdateToOneWithWhereWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceUpdateToOneWithWhereWithoutTaskInput_1.WorkspaceUpdateToOneWithWhereWithoutTaskInput)
], WorkspaceUpdateOneRequiredWithoutTaskNestedInput.prototype, "update", void 0);
exports.WorkspaceUpdateOneRequiredWithoutTaskNestedInput = WorkspaceUpdateOneRequiredWithoutTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WorkspaceUpdateOneRequiredWithoutTaskNestedInput", {})
], WorkspaceUpdateOneRequiredWithoutTaskNestedInput);
