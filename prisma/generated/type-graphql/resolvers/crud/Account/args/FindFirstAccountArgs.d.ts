import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class FindFirstAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithRelationInput[] | undefined;
    cursor?: AccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "provider" | "providerAccountId" | "type" | "access_token" | "expires_at"> | undefined;
}