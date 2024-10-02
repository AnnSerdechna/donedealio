import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnWorkspaceArgs } from "./args/CreateManyAndReturnWorkspaceArgs";
import { CreateManyAndReturnWorkspace } from "../../outputs/CreateManyAndReturnWorkspace";
export declare class CreateManyAndReturnWorkspaceResolver {
    createManyAndReturnWorkspace(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnWorkspaceArgs): Promise<CreateManyAndReturnWorkspace[]>;
}
