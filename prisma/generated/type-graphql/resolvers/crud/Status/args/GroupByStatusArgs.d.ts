import { StatusOrderByWithAggregationInput } from "../../../inputs/StatusOrderByWithAggregationInput";
import { StatusScalarWhereWithAggregatesInput } from "../../../inputs/StatusScalarWhereWithAggregatesInput";
import { StatusWhereInput } from "../../../inputs/StatusWhereInput";
export declare class GroupByStatusArgs {
    where?: StatusWhereInput | undefined;
    orderBy?: StatusOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "color" | "type">;
    having?: StatusScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
