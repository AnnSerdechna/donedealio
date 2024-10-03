"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
let DeleteManyStatusArgs = class DeleteManyStatusArgs {
};
exports.DeleteManyStatusArgs = DeleteManyStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], DeleteManyStatusArgs.prototype, "where", void 0);
exports.DeleteManyStatusArgs = DeleteManyStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStatusArgs);
