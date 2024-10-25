import { PriorityWhereInput } from "../inputs/PriorityWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class PriorityWhereUniqueInput {
    id?: number | undefined;
    AND?: PriorityWhereInput[] | undefined;
    OR?: PriorityWhereInput[] | undefined;
    NOT?: PriorityWhereInput[] | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
}
