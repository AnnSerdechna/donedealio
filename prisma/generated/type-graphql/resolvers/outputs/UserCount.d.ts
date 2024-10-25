import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountStatusArgs } from "./args/UserCountStatusArgs";
import { UserCountWorkspacesArgs } from "./args/UserCountWorkspacesArgs";
export declare class UserCount {
    accounts: number;
    workspaces: number;
    status: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getWorkspaces(root: UserCount, args: UserCountWorkspacesArgs): number;
    getStatus(root: UserCount, args: UserCountStatusArgs): number;
}
