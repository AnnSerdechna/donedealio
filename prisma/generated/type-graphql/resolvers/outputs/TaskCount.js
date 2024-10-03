"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCountFilesArgs_1 = require("./args/TaskCountFilesArgs");
let TaskCount = class TaskCount {
    getFiles(root, args) {
        return root.files;
    }
};
exports.TaskCount = TaskCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "files",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskCount, TaskCountFilesArgs_1.TaskCountFilesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TaskCount.prototype, "getFiles", null);
exports.TaskCount = TaskCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskCount", {})
], TaskCount);
