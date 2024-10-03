"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateInput_1 = require("../../../inputs/StatusCreateInput");
const StatusUpdateInput_1 = require("../../../inputs/StatusUpdateInput");
const StatusWhereUniqueInput_1 = require("../../../inputs/StatusWhereUniqueInput");
let UpsertOneStatusArgs = class UpsertOneStatusArgs {
};
exports.UpsertOneStatusArgs = UpsertOneStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusWhereUniqueInput_1.StatusWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusWhereUniqueInput_1.StatusWhereUniqueInput)
], UpsertOneStatusArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateInput_1.StatusCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusCreateInput_1.StatusCreateInput)
], UpsertOneStatusArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusUpdateInput_1.StatusUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusUpdateInput_1.StatusUpdateInput)
], UpsertOneStatusArgs.prototype, "update", void 0);
exports.UpsertOneStatusArgs = UpsertOneStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneStatusArgs);
