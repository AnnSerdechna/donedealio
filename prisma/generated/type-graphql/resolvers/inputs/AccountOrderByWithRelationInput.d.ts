import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AccountOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    providerAccountId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    access_token?: SortOrderInput | undefined;
    expires_at?: SortOrderInput | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}
