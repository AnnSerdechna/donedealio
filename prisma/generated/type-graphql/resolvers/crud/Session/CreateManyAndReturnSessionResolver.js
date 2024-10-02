"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSessionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnSessionArgs_1 = require("./args/CreateManyAndReturnSessionArgs");
const Session_1 = require("../../../models/Session");
const CreateManyAndReturnSession_1 = require("../../outputs/CreateManyAndReturnSession");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnSessionResolver = class CreateManyAndReturnSessionResolver {
    async createManyAndReturnSession(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).session.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnSessionResolver = CreateManyAndReturnSessionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSession_1.CreateManyAndReturnSession], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnSessionArgs_1.CreateManyAndReturnSessionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnSessionResolver.prototype, "createManyAndReturnSession", null);
exports.CreateManyAndReturnSessionResolver = CreateManyAndReturnSessionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], CreateManyAndReturnSessionResolver);
