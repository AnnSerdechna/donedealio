import { AccountOrderByWithAggregationInput } from "../../../inputs/AccountOrderByWithAggregationInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
export declare class GroupByAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "provider" | "providerAccountId" | "type" | "access_token" | "expires_at">;
    having?: AccountScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
