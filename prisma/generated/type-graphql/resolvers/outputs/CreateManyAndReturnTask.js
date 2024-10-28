"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTask = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTaskPriorityArgs_1 = require("./args/CreateManyAndReturnTaskPriorityArgs");
const CreateManyAndReturnTaskStatusArgs_1 = require("./args/CreateManyAndReturnTaskStatusArgs");
const CreateManyAndReturnTaskWorkspaceArgs_1 = require("./args/CreateManyAndReturnTaskWorkspaceArgs");
const Status_1 = require("../../models/Status");
const Workspace_1 = require("../../models/Workspace");
let CreateManyAndReturnTask = class CreateManyAndReturnTask {
    getStatus(root, args) {
        return root.status;
    }
    getPriority(root, args) {
        return root.priority;
    }
    getWorkspace(root, args) {
        return root.workspace;
    }
};
exports.CreateManyAndReturnTask = CreateManyAndReturnTask;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTask.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTask.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnTask.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTask.prototype, "workspaceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Status_1.Status, {
        name: "status",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnTask, CreateManyAndReturnTaskStatusArgs_1.CreateManyAndReturnTaskStatusArgs]),
    tslib_1.__metadata("design:returntype", Status_1.Status)
], CreateManyAndReturnTask.prototype, "getStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Status_1.Status, {
        name: "priority",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnTask, CreateManyAndReturnTaskPriorityArgs_1.CreateManyAndReturnTaskPriorityArgs]),
    tslib_1.__metadata("design:returntype", Status_1.Status)
], CreateManyAndReturnTask.prototype, "getPriority", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Workspace_1.Workspace, {
        name: "workspace",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnTask, CreateManyAndReturnTaskWorkspaceArgs_1.CreateManyAndReturnTaskWorkspaceArgs]),
    tslib_1.__metadata("design:returntype", Workspace_1.Workspace)
], CreateManyAndReturnTask.prototype, "getWorkspace", null);
exports.CreateManyAndReturnTask = CreateManyAndReturnTask = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTask", {})
], CreateManyAndReturnTask);
