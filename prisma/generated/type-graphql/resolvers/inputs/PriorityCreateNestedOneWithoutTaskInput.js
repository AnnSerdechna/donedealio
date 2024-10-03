"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCreateNestedOneWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateOrConnectWithoutTaskInput_1 = require("../inputs/PriorityCreateOrConnectWithoutTaskInput");
const PriorityCreateWithoutTaskInput_1 = require("../inputs/PriorityCreateWithoutTaskInput");
const PriorityWhereUniqueInput_1 = require("../inputs/PriorityWhereUniqueInput");
let PriorityCreateNestedOneWithoutTaskInput = class PriorityCreateNestedOneWithoutTaskInput {
};
exports.PriorityCreateNestedOneWithoutTaskInput = PriorityCreateNestedOneWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput)
], PriorityCreateNestedOneWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateOrConnectWithoutTaskInput_1.PriorityCreateOrConnectWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCreateOrConnectWithoutTaskInput_1.PriorityCreateOrConnectWithoutTaskInput)
], PriorityCreateNestedOneWithoutTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], PriorityCreateNestedOneWithoutTaskInput.prototype, "connect", void 0);
exports.PriorityCreateNestedOneWithoutTaskInput = PriorityCreateNestedOneWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityCreateNestedOneWithoutTaskInput", {})
], PriorityCreateNestedOneWithoutTaskInput);
