import { StatusOrderByWithRelationInput } from "../../../inputs/StatusOrderByWithRelationInput";
import { StatusWhereInput } from "../../../inputs/StatusWhereInput";
import { StatusWhereUniqueInput } from "../../../inputs/StatusWhereUniqueInput";
export declare class FindFirstStatusOrThrowArgs {
    where?: StatusWhereInput | undefined;
    orderBy?: StatusOrderByWithRelationInput[] | undefined;
    cursor?: StatusWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "color" | "type" | "userId"> | undefined;
}
