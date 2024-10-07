"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TaskScalarFieldEnum;
(function (TaskScalarFieldEnum) {
    TaskScalarFieldEnum["id"] = "id";
    TaskScalarFieldEnum["name"] = "name";
    TaskScalarFieldEnum["message"] = "message";
    TaskScalarFieldEnum["note"] = "note";
    TaskScalarFieldEnum["dueDate"] = "dueDate";
    TaskScalarFieldEnum["createdAt"] = "createdAt";
    TaskScalarFieldEnum["updatedAt"] = "updatedAt";
    TaskScalarFieldEnum["statusId"] = "statusId";
    TaskScalarFieldEnum["priorityId"] = "priorityId";
    TaskScalarFieldEnum["workspaceId"] = "workspaceId";
})(TaskScalarFieldEnum || (exports.TaskScalarFieldEnum = TaskScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
    name: "TaskScalarFieldEnum",
    description: undefined,
});
