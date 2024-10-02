import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
import { UserCountWorkspacesArgs } from "./args/UserCountWorkspacesArgs";
export declare class UserCount {
    accounts: number;
    sessions: number;
    workspaces: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
    getWorkspaces(root: UserCount, args: UserCountWorkspacesArgs): number;
}
