import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AccountScalarWhereInput {
    AND?: AccountScalarWhereInput[] | undefined;
    OR?: AccountScalarWhereInput[] | undefined;
    NOT?: AccountScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    provider?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    type?: StringFilter | undefined;
    access_token?: StringNullableFilter | undefined;
    expires_at?: IntNullableFilter | undefined;
}
