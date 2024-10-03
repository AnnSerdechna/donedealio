"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusCountTaskArgs_1 = require("./args/StatusCountTaskArgs");
let StatusCount = class StatusCount {
    getTask(root, args) {
        return root.task;
    }
};
exports.StatusCount = StatusCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "task",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StatusCount, StatusCountTaskArgs_1.StatusCountTaskArgs]),
    tslib_1.__metadata("design:returntype", Number)
], StatusCount.prototype, "getTask", null);
exports.StatusCount = StatusCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatusCount", {})
], StatusCount);
