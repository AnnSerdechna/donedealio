import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class WorkspaceOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: SortOrderInput | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}
