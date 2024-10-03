"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutStatusInput_1 = require("../inputs/TaskCreateNestedManyWithoutStatusInput");
let StatusCreateInput = class StatusCreateInput {
};
exports.StatusCreateInput = StatusCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutStatusInput_1.TaskCreateNestedManyWithoutStatusInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutStatusInput_1.TaskCreateNestedManyWithoutStatusInput)
], StatusCreateInput.prototype, "task", void 0);
exports.StatusCreateInput = StatusCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCreateInput", {})
], StatusCreateInput);
