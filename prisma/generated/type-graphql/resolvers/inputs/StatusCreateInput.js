"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutPriorityInput_1 = require("../inputs/TaskCreateNestedManyWithoutPriorityInput");
const TaskCreateNestedManyWithoutStatusInput_1 = require("../inputs/TaskCreateNestedManyWithoutStatusInput");
const UserCreateNestedOneWithoutStatusInput_1 = require("../inputs/UserCreateNestedOneWithoutStatusInput");
const StatusType_1 = require("../../enums/StatusType");
let StatusCreateInput = class StatusCreateInput {
};
exports.StatusCreateInput = StatusCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
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
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutStatusInput_1.UserCreateNestedOneWithoutStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutStatusInput_1.UserCreateNestedOneWithoutStatusInput)
], StatusCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutPriorityInput_1.TaskCreateNestedManyWithoutPriorityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutPriorityInput_1.TaskCreateNestedManyWithoutPriorityInput)
], StatusCreateInput.prototype, "priorityTasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutStatusInput_1.TaskCreateNestedManyWithoutStatusInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutStatusInput_1.TaskCreateNestedManyWithoutStatusInput)
], StatusCreateInput.prototype, "statusTasks", void 0);
exports.StatusCreateInput = StatusCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCreateInput", {})
], StatusCreateInput);
