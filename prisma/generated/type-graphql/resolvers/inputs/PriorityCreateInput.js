"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateNestedManyWithoutPriorityInput_1 = require("../inputs/TaskCreateNestedManyWithoutPriorityInput");
let PriorityCreateInput = class PriorityCreateInput {
};
exports.PriorityCreateInput = PriorityCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutPriorityInput_1.TaskCreateNestedManyWithoutPriorityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateNestedManyWithoutPriorityInput_1.TaskCreateNestedManyWithoutPriorityInput)
], PriorityCreateInput.prototype, "task", void 0);
exports.PriorityCreateInput = PriorityCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityCreateInput", {})
], PriorityCreateInput);
