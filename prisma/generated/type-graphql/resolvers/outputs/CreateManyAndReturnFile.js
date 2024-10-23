"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnFile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnFileTaskArgs_1 = require("./args/CreateManyAndReturnFileTaskArgs");
const Task_1 = require("../../models/Task");
let CreateManyAndReturnFile = class CreateManyAndReturnFile {
    getTask(root, args) {
        return root.task;
    }
};
exports.CreateManyAndReturnFile = CreateManyAndReturnFile;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnFile.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnFile.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnFile.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnFile.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnFile.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Task_1.Task, {
        name: "task",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnFile, CreateManyAndReturnFileTaskArgs_1.CreateManyAndReturnFileTaskArgs]),
    tslib_1.__metadata("design:returntype", Task_1.Task)
], CreateManyAndReturnFile.prototype, "getTask", null);
exports.CreateManyAndReturnFile = CreateManyAndReturnFile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnFile", {})
], CreateManyAndReturnFile);
