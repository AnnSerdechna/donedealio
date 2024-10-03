import { StatusOrderByWithRelationInput } from "../../../inputs/StatusOrderByWithRelationInput";
import { StatusWhereInput } from "../../../inputs/StatusWhereInput";
import { StatusWhereUniqueInput } from "../../../inputs/StatusWhereUniqueInput";
export declare class AggregateStatusArgs {
    where?: StatusWhereInput | undefined;
    orderBy?: StatusOrderByWithRelationInput[] | undefined;
    cursor?: StatusWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
