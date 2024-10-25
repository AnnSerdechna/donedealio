"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCountPriorityTasksArgs_1 = require("./args/StatusCountPriorityTasksArgs");
const StatusCountStatusTasksArgs_1 = require("./args/StatusCountStatusTasksArgs");
let StatusCount = class StatusCount {
    getPriorityTasks(root, args) {
        return root.priorityTasks;
    }
    getStatusTasks(root, args) {
        return root.statusTasks;
    }
};
exports.StatusCount = StatusCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "priorityTasks",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StatusCount, StatusCountPriorityTasksArgs_1.StatusCountPriorityTasksArgs]),
    tslib_1.__metadata("design:returntype", Number)
], StatusCount.prototype, "getPriorityTasks", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "statusTasks",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StatusCount, StatusCountStatusTasksArgs_1.StatusCountStatusTasksArgs]),
    tslib_1.__metadata("design:returntype", Number)
], StatusCount.prototype, "getStatusTasks", null);
exports.StatusCount = StatusCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatusCount", {})
], StatusCount);
