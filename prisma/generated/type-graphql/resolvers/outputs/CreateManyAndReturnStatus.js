"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatusType_1 = require("../../enums/StatusType");
let CreateManyAndReturnStatus = class CreateManyAndReturnStatus {
};
exports.CreateManyAndReturnStatus = CreateManyAndReturnStatus;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnStatus.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnStatus.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnStatus.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatusType_1.StatusType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnStatus.prototype, "type", void 0);
exports.CreateManyAndReturnStatus = CreateManyAndReturnStatus = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnStatus", {})
], CreateManyAndReturnStatus);
