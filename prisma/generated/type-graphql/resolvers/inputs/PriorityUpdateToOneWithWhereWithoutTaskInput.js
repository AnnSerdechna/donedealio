"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityUpdateToOneWithWhereWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityUpdateWithoutTaskInput_1 = require("../inputs/PriorityUpdateWithoutTaskInput");
const PriorityWhereInput_1 = require("../inputs/PriorityWhereInput");
let PriorityUpdateToOneWithWhereWithoutTaskInput = class PriorityUpdateToOneWithWhereWithoutTaskInput {
};
exports.PriorityUpdateToOneWithWhereWithoutTaskInput = PriorityUpdateToOneWithWhereWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], PriorityUpdateToOneWithWhereWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateWithoutTaskInput_1.PriorityUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityUpdateWithoutTaskInput_1.PriorityUpdateWithoutTaskInput)
], PriorityUpdateToOneWithWhereWithoutTaskInput.prototype, "data", void 0);
exports.PriorityUpdateToOneWithWhereWithoutTaskInput = PriorityUpdateToOneWithWhereWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityUpdateToOneWithWhereWithoutTaskInput", {})
], PriorityUpdateToOneWithWhereWithoutTaskInput);
