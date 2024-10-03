"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCreateOrConnectWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateWithoutTaskInput_1 = require("../inputs/StatusCreateWithoutTaskInput");
const StatusWhereUniqueInput_1 = require("../inputs/StatusWhereUniqueInput");
let StatusCreateOrConnectWithoutTaskInput = class StatusCreateOrConnectWithoutTaskInput {
};
exports.StatusCreateOrConnectWithoutTaskInput = StatusCreateOrConnectWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], StatusCreateOrConnectWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput)
], StatusCreateOrConnectWithoutTaskInput.prototype, "create", void 0);
exports.StatusCreateOrConnectWithoutTaskInput = StatusCreateOrConnectWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusCreateOrConnectWithoutTaskInput", {})
], StatusCreateOrConnectWithoutTaskInput);
