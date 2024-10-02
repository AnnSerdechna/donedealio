"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SessionCreateManyInput_1 = require("../../../inputs/SessionCreateManyInput");
let CreateManyAndReturnSessionArgs = class CreateManyAndReturnSessionArgs {
};
exports.CreateManyAndReturnSessionArgs = CreateManyAndReturnSessionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SessionCreateManyInput_1.SessionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnSessionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAndReturnSessionArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAndReturnSessionArgs = CreateManyAndReturnSessionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnSessionArgs);
