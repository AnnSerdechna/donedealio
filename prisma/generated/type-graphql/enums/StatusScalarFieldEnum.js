"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StatusScalarFieldEnum;
(function (StatusScalarFieldEnum) {
    StatusScalarFieldEnum["id"] = "id";
    StatusScalarFieldEnum["name"] = "name";
    StatusScalarFieldEnum["color"] = "color";
    StatusScalarFieldEnum["type"] = "type";
})(StatusScalarFieldEnum || (exports.StatusScalarFieldEnum = StatusScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StatusScalarFieldEnum, {
    name: "StatusScalarFieldEnum",
    description: undefined,
});
