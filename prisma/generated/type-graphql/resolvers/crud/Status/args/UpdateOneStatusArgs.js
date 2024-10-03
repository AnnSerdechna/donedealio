"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusUpdateInput_1 = require("../../../inputs/StatusUpdateInput");
const StatusWhereUniqueInput_1 = require("../../../inputs/StatusWhereUniqueInput");
let UpdateOneStatusArgs = class UpdateOneStatusArgs {
};
exports.UpdateOneStatusArgs = UpdateOneStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateInput_1.StatusUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusUpdateInput_1.StatusUpdateInput)
], UpdateOneStatusArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], UpdateOneStatusArgs.prototype, "where", void 0);
exports.UpdateOneStatusArgs = UpdateOneStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneStatusArgs);
