"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceCountTaskArgs_1 = require("./args/WorkspaceCountTaskArgs");
let WorkspaceCount = class WorkspaceCount {
    getTask(root, args) {
        return root.task;
    }
};
exports.WorkspaceCount = WorkspaceCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "task",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [WorkspaceCount, WorkspaceCountTaskArgs_1.WorkspaceCountTaskArgs]),
    tslib_1.__metadata("design:returntype", Number)
], WorkspaceCount.prototype, "getTask", null);
exports.WorkspaceCount = WorkspaceCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WorkspaceCount", {})
], WorkspaceCount);
