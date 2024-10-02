"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnAccountArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateManyInput_1 = require("../../../inputs/AccountCreateManyInput");
let CreateManyAndReturnAccountArgs = class CreateManyAndReturnAccountArgs {
};
exports.CreateManyAndReturnAccountArgs = CreateManyAndReturnAccountArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountCreateManyInput_1.AccountCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnAccountArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnAccountArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAndReturnAccountArgs = CreateManyAndReturnAccountArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnAccountArgs);
