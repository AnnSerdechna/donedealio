"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PriorityCreateManyInput = class PriorityCreateManyInput {
};
exports.PriorityCreateManyInput = PriorityCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriorityCreateManyInput.prototype, "color", void 0);
exports.PriorityCreateManyInput = PriorityCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityCreateManyInput", {})
], PriorityCreateManyInput);
