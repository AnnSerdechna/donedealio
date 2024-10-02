import { AccountAvgOrderByAggregateInput } from "../inputs/AccountAvgOrderByAggregateInput";
import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
import { AccountSumOrderByAggregateInput } from "../inputs/AccountSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class AccountOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    providerAccountId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    access_token?: SortOrderInput | undefined;
    expires_at?: SortOrderInput | undefined;
    _count?: AccountCountOrderByAggregateInput | undefined;
    _avg?: AccountAvgOrderByAggregateInput | undefined;
    _max?: AccountMaxOrderByAggregateInput | undefined;
    _min?: AccountMinOrderByAggregateInput | undefined;
    _sum?: AccountSumOrderByAggregateInput | undefined;
}
