import { StatusOrderByWithRelationInput } from "../../../inputs/StatusOrderByWithRelationInput";
import { StatusWhereInput } from "../../../inputs/StatusWhereInput";
import { StatusWhereUniqueInput } from "../../../inputs/StatusWhereUniqueInput";
export declare class FindManyStatusArgs {
    where?: StatusWhereInput | undefined;
    orderBy?: StatusOrderByWithRelationInput[] | undefined;
    cursor?: StatusWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "color"> | undefined;
}
