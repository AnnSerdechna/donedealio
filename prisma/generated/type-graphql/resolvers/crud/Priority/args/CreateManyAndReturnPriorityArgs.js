"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCreateManyInput_1 = require("../../../inputs/PriorityCreateManyInput");
let CreateManyAndReturnPriorityArgs = class CreateManyAndReturnPriorityArgs {
};
exports.CreateManyAndReturnPriorityArgs = CreateManyAndReturnPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityCreateManyInput_1.PriorityCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnPriorityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnPriorityArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAndReturnPriorityArgs = CreateManyAndReturnPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnPriorityArgs);
