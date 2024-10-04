import { NestedEnumStatusTypeFilter } from "../inputs/NestedEnumStatusTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumStatusTypeWithAggregatesFilter {
    equals?: "STATUS" | "PRIORITY" | undefined;
    in?: Array<"STATUS" | "PRIORITY"> | undefined;
    notIn?: Array<"STATUS" | "PRIORITY"> | undefined;
    not?: NestedEnumStatusTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumStatusTypeFilter | undefined;
    _max?: NestedEnumStatusTypeFilter | undefined;
}
