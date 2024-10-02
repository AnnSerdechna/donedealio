import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AccountWhereInput {
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    provider?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    type?: StringFilter | undefined;
    access_token?: StringNullableFilter | undefined;
    expires_at?: IntNullableFilter | undefined;
    user?: UserRelationFilter | undefined;
}
