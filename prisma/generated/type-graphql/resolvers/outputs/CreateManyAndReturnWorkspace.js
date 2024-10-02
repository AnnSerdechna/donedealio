"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnWorkspace = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnWorkspaceUserArgs_1 = require("./args/CreateManyAndReturnWorkspaceUserArgs");
const User_1 = require("../../models/User");
let CreateManyAndReturnWorkspace = class CreateManyAndReturnWorkspace {
    getUser(root, args) {
        return root.user;
    }
};
exports.CreateManyAndReturnWorkspace = CreateManyAndReturnWorkspace;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnWorkspace.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnWorkspace.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnWorkspace.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnWorkspace.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnWorkspace.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnWorkspace.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        name: "user",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnWorkspace, CreateManyAndReturnWorkspaceUserArgs_1.CreateManyAndReturnWorkspaceUserArgs]),
    tslib_1.__metadata("design:returntype", User_1.User)
], CreateManyAndReturnWorkspace.prototype, "getUser", null);
exports.CreateManyAndReturnWorkspace = CreateManyAndReturnWorkspace = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnWorkspace", {})
], CreateManyAndReturnWorkspace);
