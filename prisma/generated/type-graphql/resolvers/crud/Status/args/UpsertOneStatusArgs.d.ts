import { StatusCreateInput } from "../../../inputs/StatusCreateInput";
import { StatusUpdateInput } from "../../../inputs/StatusUpdateInput";
import { StatusWhereUniqueInput } from "../../../inputs/StatusWhereUniqueInput";
export declare class UpsertOneStatusArgs {
    where: StatusWhereUniqueInput;
    create: StatusCreateInput;
    update: StatusUpdateInput;
}
