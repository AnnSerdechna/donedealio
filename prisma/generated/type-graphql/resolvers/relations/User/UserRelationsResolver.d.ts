import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserWorkspacesArgs } from "./args/UserWorkspacesArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    workspaces(user: User, ctx: any, info: GraphQLResolveInfo, args: UserWorkspacesArgs): Promise<Workspace[]>;
}
