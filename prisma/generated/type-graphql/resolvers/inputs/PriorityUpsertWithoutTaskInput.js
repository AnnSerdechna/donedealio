"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityUpsertWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateWithoutTaskInput_1 = require("../inputs/PriorityCreateWithoutTaskInput");
const PriorityUpdateWithoutTaskInput_1 = require("../inputs/PriorityUpdateWithoutTaskInput");
const PriorityWhereInput_1 = require("../inputs/PriorityWhereInput");
let PriorityUpsertWithoutTaskInput = class PriorityUpsertWithoutTaskInput {
};
exports.PriorityUpsertWithoutTaskInput = PriorityUpsertWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateWithoutTaskInput_1.PriorityUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityUpdateWithoutTaskInput_1.PriorityUpdateWithoutTaskInput)
], PriorityUpsertWithoutTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput)
], PriorityUpsertWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], PriorityUpsertWithoutTaskInput.prototype, "where", void 0);
exports.PriorityUpsertWithoutTaskInput = PriorityUpsertWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityUpsertWithoutTaskInput", {})
], PriorityUpsertWithoutTaskInput);
