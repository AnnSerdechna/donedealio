import type { GraphQLResolveInfo } from "graphql";
import { CreateOneStatusArgs } from "./args/CreateOneStatusArgs";
import { Status } from "../../../models/Status";
export declare class CreateOneStatusResolver {
    createOneStatus(ctx: any, info: GraphQLResolveInfo, args: CreateOneStatusArgs): Promise<Status>;
}
