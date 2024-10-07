import { PriorityCreateOrConnectWithoutTaskInput } from "../inputs/PriorityCreateOrConnectWithoutTaskInput";
import { PriorityCreateWithoutTaskInput } from "../inputs/PriorityCreateWithoutTaskInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";
export declare class PriorityCreateNestedOneWithoutTaskInput {
    create?: PriorityCreateWithoutTaskInput | undefined;
    connectOrCreate?: PriorityCreateOrConnectWithoutTaskInput | undefined;
    connect?: PriorityWhereUniqueInput | undefined;
}
