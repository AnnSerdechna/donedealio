"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
let StatusWhereInput = class StatusWhereInput {
};
exports.StatusWhereInput = StatusWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatusWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StatusWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], StatusWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StatusWhereInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], StatusWhereInput.prototype, "task", void 0);
exports.StatusWhereInput = StatusWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StatusWhereInput", {})
], StatusWhereInput);
