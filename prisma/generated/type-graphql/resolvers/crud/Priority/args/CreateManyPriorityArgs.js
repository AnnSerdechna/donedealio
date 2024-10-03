"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateManyInput_1 = require("../../../inputs/PriorityCreateManyInput");
let CreateManyPriorityArgs = class CreateManyPriorityArgs {
};
exports.CreateManyPriorityArgs = CreateManyPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityCreateManyInput_1.PriorityCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPriorityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPriorityArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyPriorityArgs = CreateManyPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPriorityArgs);
