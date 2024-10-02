import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";
export declare class AccountCreateInput {
    id?: string | undefined;
    provider: string;
    providerAccountId: string;
    type: string;
    access_token?: string | undefined;
    expires_at?: number | undefined;
    user: UserCreateNestedOneWithoutAccountsInput;
}
