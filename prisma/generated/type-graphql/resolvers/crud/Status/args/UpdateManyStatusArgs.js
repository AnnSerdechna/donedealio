"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusUpdateManyMutationInput_1 = require("../../../inputs/StatusUpdateManyMutationInput");
const StatusWhereInput_1 = require("../../../inputs/StatusWhereInput");
let UpdateManyStatusArgs = class UpdateManyStatusArgs {
};
exports.UpdateManyStatusArgs = UpdateManyStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateManyMutationInput_1.StatusUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusUpdateManyMutationInput_1.StatusUpdateManyMutationInput)
], UpdateManyStatusArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereInput_1.StatusWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatusWhereInput_1.StatusWhereInput)
], UpdateManyStatusArgs.prototype, "where", void 0);
exports.UpdateManyStatusArgs = UpdateManyStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStatusArgs);
