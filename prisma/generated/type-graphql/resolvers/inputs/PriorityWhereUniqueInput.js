"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriorityWhereInput_1 = require("../inputs/PriorityWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const TaskListRelationFilter_1 = require("../inputs/TaskListRelationFilter");
let PriorityWhereUniqueInput = class PriorityWhereUniqueInput {
};
exports.PriorityWhereUniqueInput = PriorityWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PriorityWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriorityWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityWhereInput_1.PriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriorityWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityWhereInput_1.PriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriorityWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriorityWhereInput_1.PriorityWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriorityWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriorityWhereUniqueInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskListRelationFilter_1.TaskListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskListRelationFilter_1.TaskListRelationFilter)
], PriorityWhereUniqueInput.prototype, "task", void 0);
exports.PriorityWhereUniqueInput = PriorityWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriorityWhereUniqueInput", {})
], PriorityWhereUniqueInput);
