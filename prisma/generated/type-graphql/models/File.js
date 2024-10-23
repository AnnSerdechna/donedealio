"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let File = class File {
};
exports.File = File;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], File.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "fileId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], File.prototype, "taskId", void 0);
exports.File = File = tslib_1.__decorate([
    TypeGraphQL.ObjectType("File", {})
], File);
