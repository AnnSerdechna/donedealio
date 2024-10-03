import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusUpdateWithoutTaskInput } from "../inputs/StatusUpdateWithoutTaskInput";
import { StatusWhereInput } from "../inputs/StatusWhereInput";
export declare class StatusUpsertWithoutTaskInput {
    update: StatusUpdateWithoutTaskInput;
    create: StatusCreateWithoutTaskInput;
    where?: StatusWhereInput | undefined;
}
