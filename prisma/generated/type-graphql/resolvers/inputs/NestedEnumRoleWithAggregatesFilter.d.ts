import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumRoleWithAggregatesFilter {
    equals?: "ADMIN" | "MEMBER" | "USER" | undefined;
    in?: Array<"ADMIN" | "MEMBER" | "USER"> | undefined;
    notIn?: Array<"ADMIN" | "MEMBER" | "USER"> | undefined;
    not?: NestedEnumRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRoleFilter | undefined;
    _max?: NestedEnumRoleFilter | undefined;
}
