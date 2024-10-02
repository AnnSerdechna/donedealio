import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumRoleWithAggregatesFilter } from "../inputs/EnumRoleWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    emailVerified?: DateTimeNullableWithAggregatesFilter | undefined;
    firstName?: StringWithAggregatesFilter | undefined;
    lastName?: StringWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    role?: EnumRoleWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
