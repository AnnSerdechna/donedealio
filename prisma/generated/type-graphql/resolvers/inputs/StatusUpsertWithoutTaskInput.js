"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpsertWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateWithoutTaskInput_1 = require("../inputs/StatusCreateWithoutTaskInput");
const StatusUpdateWithoutTaskInput_1 = require("../inputs/StatusUpdateWithoutTaskInput");
const StatusWhereInput_1 = require("../inputs/StatusWhereInput");
let StatusUpsertWithoutTaskInput = class StatusUpsertWithoutTaskInput {
};
exports.StatusUpsertWithoutTaskInput = StatusUpsertWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateWithoutTaskInput_1.StatusUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusUpdateWithoutTaskInput_1.StatusUpdateWithoutTaskInput)
], StatusUpsertWithoutTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput)
], StatusUpsertWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], StatusUpsertWithoutTaskInput.prototype, "where", void 0);
exports.StatusUpsertWithoutTaskInput = StatusUpsertWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpsertWithoutTaskInput", {})
], StatusUpsertWithoutTaskInput);
