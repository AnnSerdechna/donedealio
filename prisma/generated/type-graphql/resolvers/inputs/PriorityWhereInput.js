"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
let PriorityWhereInput = class PriorityWhereInput {
};
exports.PriorityWhereInput = PriorityWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriorityWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriorityWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriorityWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PriorityWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriorityWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriorityWhereInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], PriorityWhereInput.prototype, "task", void 0);
exports.PriorityWhereInput = PriorityWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityWhereInput", {})
], PriorityWhereInput);
