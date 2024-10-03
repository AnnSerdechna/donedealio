"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var FileScalarFieldEnum;
(function (FileScalarFieldEnum) {
    FileScalarFieldEnum["id"] = "id";
    FileScalarFieldEnum["file"] = "file";
    FileScalarFieldEnum["taskId"] = "taskId";
})(FileScalarFieldEnum || (exports.FileScalarFieldEnum = FileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
    name: "FileScalarFieldEnum",
    description: undefined,
});
