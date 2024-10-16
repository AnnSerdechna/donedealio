import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { WorkspaceListRelationFilter } from "../inputs/WorkspaceListRelationFilter";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    role?: EnumRoleFilter | undefined;
    image?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    workspaces?: WorkspaceListRelationFilter | undefined;
}
