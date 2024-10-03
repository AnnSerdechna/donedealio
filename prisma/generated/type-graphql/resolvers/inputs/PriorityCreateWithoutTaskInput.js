"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCreateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriorityCreateWithoutTaskInput = class PriorityCreateWithoutTaskInput {
};
exports.PriorityCreateWithoutTaskInput = PriorityCreateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCreateWithoutTaskInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCreateWithoutTaskInput.prototype, "color", void 0);
exports.PriorityCreateWithoutTaskInput = PriorityCreateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityCreateWithoutTaskInput", {})
], PriorityCreateWithoutTaskInput);
