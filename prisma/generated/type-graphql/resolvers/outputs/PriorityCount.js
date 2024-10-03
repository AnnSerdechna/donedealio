"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityCountTaskArgs_1 = require("./args/PriorityCountTaskArgs");
let PriorityCount = class PriorityCount {
    getTask(root, args) {
        return root.task;
    }
};
exports.PriorityCount = PriorityCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "task",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PriorityCount, PriorityCountTaskArgs_1.PriorityCountTaskArgs]),
    tslib_1.__metadata("design:returntype", Number)
], PriorityCount.prototype, "getTask", null);
exports.PriorityCount = PriorityCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PriorityCount", {})
], PriorityCount);
