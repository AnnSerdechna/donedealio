import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { UserWorkspacesArgs } from "./args/UserWorkspacesArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
    workspaces(user: User, ctx: any, info: GraphQLResolveInfo, args: UserWorkspacesArgs): Promise<Workspace[]>;
}
