import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountWorkspacesArgs } from "./args/UserCountWorkspacesArgs";
export declare class UserCount {
    accounts: number;
    workspaces: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getWorkspaces(root: UserCount, args: UserCountWorkspacesArgs): number;
}
