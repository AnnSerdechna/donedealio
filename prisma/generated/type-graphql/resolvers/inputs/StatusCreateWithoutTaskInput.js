"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCreateWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusType_1 = require("../../enums/StatusType");
let StatusCreateWithoutTaskInput = class StatusCreateWithoutTaskInput {
};
exports.StatusCreateWithoutTaskInput = StatusCreateWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateWithoutTaskInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateWithoutTaskInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StatusCreateWithoutTaskInput.prototype, "type", void 0);
exports.StatusCreateWithoutTaskInput = StatusCreateWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCreateWithoutTaskInput", {})
], StatusCreateWithoutTaskInput);
