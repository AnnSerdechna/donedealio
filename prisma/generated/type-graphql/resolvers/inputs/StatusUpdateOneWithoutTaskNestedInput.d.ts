import { StatusCreateOrConnectWithoutTaskInput } from "../inputs/StatusCreateOrConnectWithoutTaskInput";
import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusUpdateToOneWithWhereWithoutTaskInput } from "../inputs/StatusUpdateToOneWithWhereWithoutTaskInput";
import { StatusUpsertWithoutTaskInput } from "../inputs/StatusUpsertWithoutTaskInput";
import { StatusWhereInput } from "../inputs/StatusWhereInput";
import { StatusWhereUniqueInput } from "../inputs/StatusWhereUniqueInput";
export declare class StatusUpdateOneWithoutTaskNestedInput {
    create?: StatusCreateWithoutTaskInput | undefined;
    connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | undefined;
    upsert?: StatusUpsertWithoutTaskInput | undefined;
    disconnect?: StatusWhereInput | undefined;
    delete?: StatusWhereInput | undefined;
    connect?: StatusWhereUniqueInput | undefined;
    update?: StatusUpdateToOneWithWhereWithoutTaskInput | undefined;
}
