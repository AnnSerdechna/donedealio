import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { TwoFactorConfirnation } from "../../../models/TwoFactorConfirnation";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserTwoFactorConfirnationArgs } from "./args/UserTwoFactorConfirnationArgs";
import { UserWorkspacesArgs } from "./args/UserWorkspacesArgs";
export declare class UserRelationsResolver {
    twoFactorConfirnation(user: User, ctx: any, info: GraphQLResolveInfo, args: UserTwoFactorConfirnationArgs): Promise<TwoFactorConfirnation | null>;
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    workspaces(user: User, ctx: any, info: GraphQLResolveInfo, args: UserWorkspacesArgs): Promise<Workspace[]>;
}
