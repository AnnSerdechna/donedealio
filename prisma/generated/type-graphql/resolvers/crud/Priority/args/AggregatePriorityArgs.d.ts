import { PriorityOrderByWithRelationInput } from "../../../inputs/PriorityOrderByWithRelationInput";
import { PriorityWhereInput } from "../../../inputs/PriorityWhereInput";
import { PriorityWhereUniqueInput } from "../../../inputs/PriorityWhereUniqueInput";
export declare class AggregatePriorityArgs {
    where?: PriorityWhereInput | undefined;
    orderBy?: PriorityOrderByWithRelationInput[] | undefined;
    cursor?: PriorityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
