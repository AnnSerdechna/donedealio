"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUpdateOneWithoutTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateOrConnectWithoutTaskInput_1 = require("../inputs/StatusCreateOrConnectWithoutTaskInput");
const StatusCreateWithoutTaskInput_1 = require("../inputs/StatusCreateWithoutTaskInput");
const StatusUpdateToOneWithWhereWithoutTaskInput_1 = require("../inputs/StatusUpdateToOneWithWhereWithoutTaskInput");
const StatusUpsertWithoutTaskInput_1 = require("../inputs/StatusUpsertWithoutTaskInput");
const StatusWhereInput_1 = require("../inputs/StatusWhereInput");
const StatusWhereUniqueInput_1 = require("../inputs/StatusWhereUniqueInput");
let StatusUpdateOneWithoutTaskNestedInput = class StatusUpdateOneWithoutTaskNestedInput {
};
exports.StatusUpdateOneWithoutTaskNestedInput = StatusUpdateOneWithoutTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateWithoutTaskInput_1.StatusCreateWithoutTaskInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateOrConnectWithoutTaskInput_1.StatusCreateOrConnectWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusCreateOrConnectWithoutTaskInput_1.StatusCreateOrConnectWithoutTaskInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpsertWithoutTaskInput_1.StatusUpsertWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusUpsertWithoutTaskInput_1.StatusUpsertWithoutTaskInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateToOneWithWhereWithoutTaskInput_1.StatusUpdateToOneWithWhereWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusUpdateToOneWithWhereWithoutTaskInput_1.StatusUpdateToOneWithWhereWithoutTaskInput)
], StatusUpdateOneWithoutTaskNestedInput.prototype, "update", void 0);
exports.StatusUpdateOneWithoutTaskNestedInput = StatusUpdateOneWithoutTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusUpdateOneWithoutTaskNestedInput", {})
], StatusUpdateOneWithoutTaskNestedInput);
