"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountAccountsArgs_1 = require("./args/UserCountAccountsArgs");
const UserCountWorkspacesArgs_1 = require("./args/UserCountWorkspacesArgs");
let UserCount = class UserCount {
    getAccounts(root, args) {
        return root.accounts;
    }
    getWorkspaces(root, args) {
        return root.workspaces;
    }
};
exports.UserCount = UserCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "accounts",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountAccountsArgs_1.UserCountAccountsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "workspaces",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountWorkspacesArgs_1.UserCountWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getWorkspaces", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
