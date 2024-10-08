"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnUserArgs_1 = require("./args/CreateManyAndReturnUserArgs");
const User_1 = require("../../../models/User");
const CreateManyAndReturnUser_1 = require("../../outputs/CreateManyAndReturnUser");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnUserResolver = class CreateManyAndReturnUserResolver {
    async createManyAndReturnUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).user.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnUserResolver = CreateManyAndReturnUserResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUser_1.CreateManyAndReturnUser], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnUserArgs_1.CreateManyAndReturnUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnUserResolver.prototype, "createManyAndReturnUser", null);
exports.CreateManyAndReturnUserResolver = CreateManyAndReturnUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], CreateManyAndReturnUserResolver);
