import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneStatusArgs } from "./args/UpsertOneStatusArgs";
import { Status } from "../../../models/Status";
export declare class UpsertOneStatusResolver {
    upsertOneStatus(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStatusArgs): Promise<Status>;
}
