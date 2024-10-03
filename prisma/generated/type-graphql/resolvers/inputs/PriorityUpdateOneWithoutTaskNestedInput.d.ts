import { PriorityCreateOrConnectWithoutTaskInput } from "../inputs/PriorityCreateOrConnectWithoutTaskInput";
import { PriorityCreateWithoutTaskInput } from "../inputs/PriorityCreateWithoutTaskInput";
import { PriorityUpdateToOneWithWhereWithoutTaskInput } from "../inputs/PriorityUpdateToOneWithWhereWithoutTaskInput";
import { PriorityUpsertWithoutTaskInput } from "../inputs/PriorityUpsertWithoutTaskInput";
import { PriorityWhereInput } from "../inputs/PriorityWhereInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";
export declare class PriorityUpdateOneWithoutTaskNestedInput {
    create?: PriorityCreateWithoutTaskInput | undefined;
    connectOrCreate?: PriorityCreateOrConnectWithoutTaskInput | undefined;
    upsert?: PriorityUpsertWithoutTaskInput | undefined;
    disconnect?: PriorityWhereInput | undefined;
    delete?: PriorityWhereInput | undefined;
    connect?: PriorityWhereUniqueInput | undefined;
    update?: PriorityUpdateToOneWithWhereWithoutTaskInput | undefined;
}
