import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneStatusArgs } from "./args/UpdateOneStatusArgs";
import { Status } from "../../../models/Status";
export declare class UpdateOneStatusResolver {
    updateOneStatus(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStatusArgs): Promise<Status | null>;
}
