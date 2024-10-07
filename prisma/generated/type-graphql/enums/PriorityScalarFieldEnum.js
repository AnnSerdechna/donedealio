"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PriorityScalarFieldEnum;
(function (PriorityScalarFieldEnum) {
    PriorityScalarFieldEnum["id"] = "id";
    PriorityScalarFieldEnum["name"] = "name";
    PriorityScalarFieldEnum["color"] = "color";
})(PriorityScalarFieldEnum || (exports.PriorityScalarFieldEnum = PriorityScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PriorityScalarFieldEnum, {
    name: "PriorityScalarFieldEnum",
    description: undefined,
});
