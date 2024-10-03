import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneStatusArgs } from "./args/DeleteOneStatusArgs";
import { Status } from "../../../models/Status";
export declare class DeleteOneStatusResolver {
    deleteOneStatus(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStatusArgs): Promise<Status | null>;
}
