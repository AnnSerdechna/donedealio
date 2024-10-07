"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnPriority = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CreateManyAndReturnPriority = class CreateManyAndReturnPriority {
};
exports.CreateManyAndReturnPriority = CreateManyAndReturnPriority;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnPriority.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnPriority.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnPriority.prototype, "color", void 0);
exports.CreateManyAndReturnPriority = CreateManyAndReturnPriority = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnPriority", {})
], CreateManyAndReturnPriority);
