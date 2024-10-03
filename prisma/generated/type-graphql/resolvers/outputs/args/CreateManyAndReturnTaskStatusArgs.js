"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTaskStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereInput_1 = require("../../inputs/StatusWhereInput");
let CreateManyAndReturnTaskStatusArgs = class CreateManyAndReturnTaskStatusArgs {
};
exports.CreateManyAndReturnTaskStatusArgs = CreateManyAndReturnTaskStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], CreateManyAndReturnTaskStatusArgs.prototype, "where", void 0);
exports.CreateManyAndReturnTaskStatusArgs = CreateManyAndReturnTaskStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnTaskStatusArgs);
