"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateInput_1 = require("../../../inputs/PriorityCreateInput");
const PriorityUpdateInput_1 = require("../../../inputs/PriorityUpdateInput");
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
let UpsertOnePriorityArgs = class UpsertOnePriorityArgs {
};
exports.UpsertOnePriorityArgs = UpsertOnePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], UpsertOnePriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateInput_1.PriorityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityCreateInput_1.PriorityCreateInput)
], UpsertOnePriorityArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateInput_1.PriorityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityUpdateInput_1.PriorityUpdateInput)
], UpsertOnePriorityArgs.prototype, "update", void 0);
exports.UpsertOnePriorityArgs = UpsertOnePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePriorityArgs);
