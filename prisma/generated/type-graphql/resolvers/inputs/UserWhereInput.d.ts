import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TwoFactorConfirnationNullableRelationFilter } from "../inputs/TwoFactorConfirnationNullableRelationFilter";
import { WorkspaceListRelationFilter } from "../inputs/WorkspaceListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    role?: EnumRoleFilter | undefined;
    image?: StringNullableFilter | undefined;
    imageId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    isTwoFactorEnable?: BoolFilter | undefined;
    twoFactorConfirnation?: TwoFactorConfirnationNullableRelationFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    workspaces?: WorkspaceListRelationFilter | undefined;
}
