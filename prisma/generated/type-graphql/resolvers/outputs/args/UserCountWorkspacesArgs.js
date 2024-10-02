"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspaceWhereInput_1 = require("../../inputs/WorkspaceWhereInput");
let UserCountWorkspacesArgs = class UserCountWorkspacesArgs {
};
exports.UserCountWorkspacesArgs = UserCountWorkspacesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspaceWhereInput_1.WorkspaceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WorkspaceWhereInput_1.WorkspaceWhereInput)
], UserCountWorkspacesArgs.prototype, "where", void 0);
exports.UserCountWorkspacesArgs = UserCountWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountWorkspacesArgs);
