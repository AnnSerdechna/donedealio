"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpdateToOneWithWhereWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusUpdateWithoutTaskInput_1 = require("../inputs/StatusUpdateWithoutTaskInput");
const StatusWhereInput_1 = require("../inputs/StatusWhereInput");
let StatusUpdateToOneWithWhereWithoutTaskInput = class StatusUpdateToOneWithWhereWithoutTaskInput {
};
exports.StatusUpdateToOneWithWhereWithoutTaskInput = StatusUpdateToOneWithWhereWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], StatusUpdateToOneWithWhereWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateWithoutTaskInput_1.StatusUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusUpdateWithoutTaskInput_1.StatusUpdateWithoutTaskInput)
], StatusUpdateToOneWithWhereWithoutTaskInput.prototype, "data", void 0);
exports.StatusUpdateToOneWithWhereWithoutTaskInput = StatusUpdateToOneWithWhereWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpdateToOneWithWhereWithoutTaskInput", {})
], StatusUpdateToOneWithWhereWithoutTaskInput);
