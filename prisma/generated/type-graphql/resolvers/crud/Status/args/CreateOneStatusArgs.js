"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateInput_1 = require("../../../inputs/StatusCreateInput");
let CreateOneStatusArgs = class CreateOneStatusArgs {
};
exports.CreateOneStatusArgs = CreateOneStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusCreateInput_1.StatusCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StatusCreateInput_1.StatusCreateInput)
], CreateOneStatusArgs.prototype, "data", void 0);
exports.CreateOneStatusArgs = CreateOneStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneStatusArgs);
