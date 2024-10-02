"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AccountScalarFieldEnum;
(function (AccountScalarFieldEnum) {
    AccountScalarFieldEnum["id"] = "id";
    AccountScalarFieldEnum["userId"] = "userId";
    AccountScalarFieldEnum["provider"] = "provider";
    AccountScalarFieldEnum["providerAccountId"] = "providerAccountId";
    AccountScalarFieldEnum["type"] = "type";
    AccountScalarFieldEnum["access_token"] = "access_token";
    AccountScalarFieldEnum["expires_at"] = "expires_at";
})(AccountScalarFieldEnum || (exports.AccountScalarFieldEnum = AccountScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
    name: "AccountScalarFieldEnum",
    description: undefined,
});
