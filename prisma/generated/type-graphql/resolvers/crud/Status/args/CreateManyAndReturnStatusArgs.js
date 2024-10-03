"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnStatusArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCreateManyInput_1 = require("../../../inputs/StatusCreateManyInput");
let CreateManyAndReturnStatusArgs = class CreateManyAndReturnStatusArgs {
};
exports.CreateManyAndReturnStatusArgs = CreateManyAndReturnStatusArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusCreateManyInput_1.StatusCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnStatusArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnStatusArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAndReturnStatusArgs = CreateManyAndReturnStatusArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnStatusArgs);
