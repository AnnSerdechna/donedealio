"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCreateNestedOneWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateOrConnectWithoutTaskInput_1 = require("../inputs/StatusCreateOrConnectWithoutTaskInput");
const StatusCreateWithoutTaskInput_1 = require("../inputs/StatusCreateWithoutTaskInput");
const StatusWhereUniqueInput_1 = require("../inputs/StatusWhereUniqueInput");
let StatusCreateNestedOneWithoutTaskInput = class StatusCreateNestedOneWithoutTaskInput {
};
exports.StatusCreateNestedOneWithoutTaskInput = StatusCreateNestedOneWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput)
], StatusCreateNestedOneWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateOrConnectWithoutTaskInput_1.StatusCreateOrConnectWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateOrConnectWithoutTaskInput_1.StatusCreateOrConnectWithoutTaskInput)
], StatusCreateNestedOneWithoutTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], StatusCreateNestedOneWithoutTaskInput.prototype, "connect", void 0);
exports.StatusCreateNestedOneWithoutTaskInput = StatusCreateNestedOneWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCreateNestedOneWithoutTaskInput", {})
], StatusCreateNestedOneWithoutTaskInput);
