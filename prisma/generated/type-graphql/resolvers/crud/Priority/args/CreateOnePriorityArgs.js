"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateInput_1 = require("../../../inputs/PriorityCreateInput");
let CreateOnePriorityArgs = class CreateOnePriorityArgs {
};
exports.CreateOnePriorityArgs = CreateOnePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityCreateInput_1.PriorityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriorityCreateInput_1.PriorityCreateInput)
], CreateOnePriorityArgs.prototype, "data", void 0);
exports.CreateOnePriorityArgs = CreateOnePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePriorityArgs);
