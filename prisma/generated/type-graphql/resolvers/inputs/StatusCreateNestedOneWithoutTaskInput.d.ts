import { StatusCreateOrConnectWithoutTaskInput } from "../inputs/StatusCreateOrConnectWithoutTaskInput";
import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusWhereUniqueInput } from "../inputs/StatusWhereUniqueInput";
export declare class StatusCreateNestedOneWithoutTaskInput {
    create?: StatusCreateWithoutTaskInput | undefined;
    connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | undefined;
    connect?: StatusWhereUniqueInput | undefined;
}
