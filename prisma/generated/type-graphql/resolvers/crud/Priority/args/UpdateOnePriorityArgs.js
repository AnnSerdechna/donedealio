"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityUpdateInput_1 = require("../../../inputs/PriorityUpdateInput");
const PriorityWhereUniqueInput_1 = require("../../../inputs/PriorityWhereUniqueInput");
let UpdateOnePriorityArgs = class UpdateOnePriorityArgs {
};
exports.UpdateOnePriorityArgs = UpdateOnePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateInput_1.PriorityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityUpdateInput_1.PriorityUpdateInput)
], UpdateOnePriorityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereUniqueInput_1.PriorityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityWhereUniqueInput_1.PriorityWhereUniqueInput)
], UpdateOnePriorityArgs.prototype, "where", void 0);
exports.UpdateOnePriorityArgs = UpdateOnePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePriorityArgs);
