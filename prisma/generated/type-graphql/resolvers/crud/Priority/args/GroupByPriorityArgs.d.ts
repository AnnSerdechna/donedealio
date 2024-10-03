import { PriorityOrderByWithAggregationInput } from "../../../inputs/PriorityOrderByWithAggregationInput";
import { PriorityScalarWhereWithAggregatesInput } from "../../../inputs/PriorityScalarWhereWithAggregatesInput";
import { PriorityWhereInput } from "../../../inputs/PriorityWhereInput";
export declare class GroupByPriorityArgs {
    where?: PriorityWhereInput | undefined;
    orderBy?: PriorityOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "color">;
    having?: PriorityScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
