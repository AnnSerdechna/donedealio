"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityUpdateOneWithoutTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateOrConnectWithoutTaskInput_1 = require("../inputs/PriorityCreateOrConnectWithoutTaskInput");
const PriorityCreateWithoutTaskInput_1 = require("../inputs/PriorityCreateWithoutTaskInput");
const PriorityUpdateToOneWithWhereWithoutTaskInput_1 = require("../inputs/PriorityUpdateToOneWithWhereWithoutTaskInput");
const PriorityUpsertWithoutTaskInput_1 = require("../inputs/PriorityUpsertWithoutTaskInput");
const PriorityWhereInput_1 = require("../inputs/PriorityWhereInput");
const PriorityWhereUniqueInput_1 = require("../inputs/PriorityWhereUniqueInput");
let PriorityUpdateOneWithoutTaskNestedInput = class PriorityUpdateOneWithoutTaskNestedInput {
};
exports.PriorityUpdateOneWithoutTaskNestedInput = PriorityUpdateOneWithoutTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCreateWithoutTaskInput_1.PriorityCreateWithoutTaskInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateOrConnectWithoutTaskInput_1.PriorityCreateOrConnectWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityCreateOrConnectWithoutTaskInput_1.PriorityCreateOrConnectWithoutTaskInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpsertWithoutTaskInput_1.PriorityUpsertWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityUpsertWithoutTaskInput_1.PriorityUpsertWithoutTaskInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateToOneWithWhereWithoutTaskInput_1.PriorityUpdateToOneWithWhereWithoutTaskInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityUpdateToOneWithWhereWithoutTaskInput_1.PriorityUpdateToOneWithWhereWithoutTaskInput)
], PriorityUpdateOneWithoutTaskNestedInput.prototype, "update", void 0);
exports.PriorityUpdateOneWithoutTaskNestedInput = PriorityUpdateOneWithoutTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityUpdateOneWithoutTaskNestedInput", {})
], PriorityUpdateOneWithoutTaskNestedInput);
