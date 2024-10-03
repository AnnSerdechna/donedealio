"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCreateOrConnectWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateWithoutTaskInput_1 = require("../inputs/PriorityCreateWithoutTaskInput");
const PriorityWhereUniqueInput_1 = require("../inputs/PriorityWhereUniqueInput");
let PriorityCreateOrConnectWithoutTaskInput = class PriorityCreateOrConnectWithoutTaskInput {
};
exports.PriorityCreateOrConnectWithoutTaskInput = PriorityCreateOrConnectWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], PriorityCreateOrConnectWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput)
], PriorityCreateOrConnectWithoutTaskInput.prototype, "create", void 0);
exports.PriorityCreateOrConnectWithoutTaskInput = PriorityCreateOrConnectWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityCreateOrConnectWithoutTaskInput", {})
], PriorityCreateOrConnectWithoutTaskInput);
