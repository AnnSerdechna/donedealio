"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatusCreateManyInput = class StatusCreateManyInput {
};
exports.StatusCreateManyInput = StatusCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatusCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateManyInput.prototype, "color", void 0);
exports.StatusCreateManyInput = StatusCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCreateManyInput", {})
], StatusCreateManyInput);
