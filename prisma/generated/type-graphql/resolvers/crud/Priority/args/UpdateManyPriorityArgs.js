"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityUpdateManyMutationInput_1 = require("../../../inputs/PriorityUpdateManyMutationInput");
const PriorityWhereInput_1 = require("../../../inputs/PriorityWhereInput");
let UpdateManyPriorityArgs = class UpdateManyPriorityArgs {
};
exports.UpdateManyPriorityArgs = UpdateManyPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityUpdateManyMutationInput_1.PriorityUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityUpdateManyMutationInput_1.PriorityUpdateManyMutationInput)
], UpdateManyPriorityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityWhereInput_1.PriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriorityWhereInput_1.PriorityWhereInput)
], UpdateManyPriorityArgs.prototype, "where", void 0);
exports.UpdateManyPriorityArgs = UpdateManyPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPriorityArgs);
