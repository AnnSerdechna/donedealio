import { NestedEnumStatusTypeFilter } from "../inputs/NestedEnumStatusTypeFilter";
export declare class EnumStatusTypeFilter {
    equals?: "STATUS" | "PRIORITY" | undefined;
    in?: Array<"STATUS" | "PRIORITY"> | undefined;
    notIn?: Array<"STATUS" | "PRIORITY"> | undefined;
    not?: NestedEnumStatusTypeFilter | undefined;
}
