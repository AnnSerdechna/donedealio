export declare class NestedEnumRoleFilter {
    equals?: "ADMIN" | "MEMBER" | "USER" | undefined;
    in?: Array<"ADMIN" | "MEMBER" | "USER"> | undefined;
    notIn?: Array<"ADMIN" | "MEMBER" | "USER"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
