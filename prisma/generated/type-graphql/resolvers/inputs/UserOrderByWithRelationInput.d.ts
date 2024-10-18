import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TwoFactorConfirnationOrderByWithRelationInput } from "../inputs/TwoFactorConfirnationOrderByWithRelationInput";
import { WorkspaceOrderByRelationAggregateInput } from "../inputs/WorkspaceOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: SortOrderInput | undefined;
    password?: SortOrderInput | undefined;
    role?: "asc" | "desc" | undefined;
    image?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    isTwoFactorEnable?: "asc" | "desc" | undefined;
    twoFactorConfirnation?: TwoFactorConfirnationOrderByWithRelationInput | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    workspaces?: WorkspaceOrderByRelationAggregateInput | undefined;
}
