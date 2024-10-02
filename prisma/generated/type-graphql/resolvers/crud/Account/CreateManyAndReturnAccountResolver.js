"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnAccountArgs_1 = require("./args/CreateManyAndReturnAccountArgs");
const Account_1 = require("../../../models/Account");
const CreateManyAndReturnAccount_1 = require("../../outputs/CreateManyAndReturnAccount");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnAccountResolver = class CreateManyAndReturnAccountResolver {
    async createManyAndReturnAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnAccountResolver = CreateManyAndReturnAccountResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAccount_1.CreateManyAndReturnAccount], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnAccountArgs_1.CreateManyAndReturnAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnAccountResolver.prototype, "createManyAndReturnAccount", null);
exports.CreateManyAndReturnAccountResolver = CreateManyAndReturnAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], CreateManyAndReturnAccountResolver);
