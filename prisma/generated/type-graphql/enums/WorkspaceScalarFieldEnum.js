"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var WorkspaceScalarFieldEnum;
(function (WorkspaceScalarFieldEnum) {
    WorkspaceScalarFieldEnum["id"] = "id";
    WorkspaceScalarFieldEnum["name"] = "name";
    WorkspaceScalarFieldEnum["description"] = "description";
    WorkspaceScalarFieldEnum["createdAt"] = "createdAt";
    WorkspaceScalarFieldEnum["updatedAt"] = "updatedAt";
    WorkspaceScalarFieldEnum["userId"] = "userId";
})(WorkspaceScalarFieldEnum || (exports.WorkspaceScalarFieldEnum = WorkspaceScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(WorkspaceScalarFieldEnum, {
    name: "WorkspaceScalarFieldEnum",
    description: undefined,
});
