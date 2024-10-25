"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskPriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereInput_1 = require("../../inputs/StatusWhereInput");
let CreateManyAndReturnTaskPriorityArgs = class CreateManyAndReturnTaskPriorityArgs {
};
exports.CreateManyAndReturnTaskPriorityArgs = CreateManyAndReturnTaskPriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], CreateManyAndReturnTaskPriorityArgs.prototype, "where", void 0);
exports.CreateManyAndReturnTaskPriorityArgs = CreateManyAndReturnTaskPriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnTaskPriorityArgs);
